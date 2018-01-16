import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import *  as qs from 'qs';

import { SituationExchange } from '../models/situation-exchange';


@Injectable()
export class SituationExchangeService {

  static DATATABLES_SIZE: number = 1000;

  constructor(private http: HttpClient) { }

  public create(url: string, body: SituationExchange): Observable<SituationExchange> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, body, { observe: 'response', headers: headers })
      .map(response => <SituationExchange>response.body)
      .catch(this.onError);
  }

  public read(url: string): Observable<SituationExchange[]> {
    return this.http.get(url, { observe: 'response' })
      .map(response => <SituationExchange[]>response.body)
      .catch(this.onError);
  }

  public update(url: string, body: SituationExchange): Observable<SituationExchange> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, body, { observe: 'response', headers: headers })
      .map(response => <SituationExchange>response.body)
      .catch(this.onError);
  }

  public delete(url: string): Observable<void> {
    return this.http.delete(url, { observe: 'response', responseType: 'text', })
      .map(response => "")
      .catch(this.onError);
  }

  protected onError(error: any) {
    return Observable.throw('failure');
  }

}
