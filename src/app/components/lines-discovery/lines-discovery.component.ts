import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducers from '../../reducers';
import * as LinesDiscovery from '../../reducers/lines-discovery-reducers';
import * as  LinesDiscoveryActions from '../../actions/lines-discovery-actions';
import { DataTablesService } from '../../services/datatables.service';
import { DataTablesDirective } from '../../directives/datatables.directive';

@Component({
  selector: 'lines-discovery',
  templateUrl: './lines-discovery.component.html',
  styleUrls: ['./lines-discovery.component.css'],
})
export class LinesDiscoveryComponent implements OnInit, AfterViewInit {

  constructor(private service: DataTablesService, private store: Store<reducers.State>) {
  }

  private settings: any;

  private all$: Observable<LinesDiscovery.State>;

  @ViewChild(DataTablesDirective)
  private datatables;

  ngOnInit(): void {
    this.settings = {
      serverSide: true,
      ajax: this.update.bind(this),
      scrollY: "70vh",
      deferRender: true,
      scroller: true,
      columns: [
        { data: "LineRef.value" },
        { data: "LineName.0.value" },
      ]
    };
    this.all$ = this.store.select(reducers.selectLinesDiscoveryState);
  }

  ngAfterViewInit(): void {
    this.datatables.instance.columns().every(function () {
      const self = this;
      $('input', this.footer()).on('keyup change', function () {
        if (self.search() !== this['value']) {
          self.search(this['value']).draw();
        }
      });
    });
  }

  private update(data: any, callback: ((result: any) => void), settings: any) {
    this.all$.first(t => t.draw == data.draw).subscribe(t => {
      let array = Object.keys(t.entities).map(u => t.entities[u]);
      let result = <any>Object.assign({}, {
        data: array,
        recordsFiltered: t.recordsFiltered,
        recordsTotal: t.recordsTotal,
        draw: data.draw,
      });
      console.log(result)
      callback(result);
    });

    this.store.dispatch(new LinesDiscoveryActions.AllAction(data));
  }

}