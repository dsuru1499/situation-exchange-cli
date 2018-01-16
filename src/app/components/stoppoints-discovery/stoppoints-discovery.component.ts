import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducers from '../../reducers';
import * as StoppointsDiscovery from '../../reducers/stoppoints-discovery-reducers';
import * as  StoppointsDiscoveryActions from '../../actions/stoppoints-discovery-actions';
import { DataTablesService } from '../../services/datatables.service';
import { DataTablesDirective } from '../../directives/datatables.directive';

@Component({
  selector: 'stoppoints-discovery',
  templateUrl: './stoppoints-discovery.component.html',
  styleUrls: ['./stoppoints-discovery.component.css']
})
export class StoppointsDiscoveryComponent implements OnInit, AfterViewInit {

  constructor(private service: DataTablesService, private store: Store<reducers.State>) {
  }

  private settings: any;

  private all$: Observable<StoppointsDiscovery.State>;

  @ViewChild(DataTablesDirective)
  private datatables;

  ngOnInit(): void {
    this.settings = {
      serverSide: true,
      ajax: this.update.bind(this),
      scrollY: '70vh',
      deferRender: true,
      scroller: true,
      columns: [
        { data: "StopPointRef.value" },
        { data: "StopName.0.value" },
        { data: "Location.Longitude", orderable: false, searchable: false },
        { data: "Location.Latitude", orderable: false, searchable: false },
      ]
    };

    this.all$ = this.store.select(reducers.selectStoppointsDiscoveryState);
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
      callback(result);
    });

    this.store.dispatch(new StoppointsDiscoveryActions.AllAction(data));
  }

}

