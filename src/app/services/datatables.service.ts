import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import *  as qs from 'qs';

@Injectable()
export class DataTablesService {

  static DATATABLES_SIZE: number = 1000;

  constructor(private http: HttpClient) { }

  public all(url: string, data: any): Observable<any> {
    let size = DataTablesService.DATATABLES_SIZE;
    let begin = Math.floor(data.start / size);
    let end = Math.floor((data.start + data.length - 1) / size);
    let array: Observable<HttpResponse<any>>[] = [];
    for (let page = begin; page <= end; page++) {
      let body = Object.assign({}, data, {
        start: page * size,
        length: size,
      });
      let value = url + '?' + qs.stringify(body, { allowDots: true });
      array.push(this.http.get<any>(value, { observe: 'response' }));
    }

    return Observable.forkJoin(array).map(this.reduce.bind(this, data)).catch(this.onError);
  }

  private reduce(data: any, response: HttpResponse<any>[]): Observable<any> {
    let result: any;
    let size = DataTablesService.DATATABLES_SIZE;

    for (let i = 0; i < response.length; i++) {
      let body: any = response[i].body;

      if (i == 0) {
        result = Object.assign({}, body, { data: [], draw: data.draw });
        let begin = data.start % size;
        let end = Math.min(size, data.start + data.length);
        result.data = body.data.slice(begin, end);
      } else if (i == response.length - 1) {
        let end = (data.start + data.length) % size;
        result.data = result.data.concat(body.data.slice(0, end));
      } else {
        result.data = result.data.concat(body.data.slice(0, size));
      }
    }

    return result;
  }

  protected onError(error: any) {
    console.log(error);
    return Observable.throw('failure');
  }

}
