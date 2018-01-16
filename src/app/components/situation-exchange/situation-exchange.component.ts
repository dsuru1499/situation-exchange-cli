import { Component, OnInit, AfterViewInit, ViewChild, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import * as reducers from '../../reducers';
import * as SituationEchange from '../../reducers/situation-exchange-reducers';
import * as SituationExchangeActions from '../../actions/situation-exchange-actions';
import { DataTablesService } from '../../services/datatables.service';
import { SituationExchangeFormComponent } from '../situation-exchange-form/situation-exchange-form.component';
import { DialogAnchorDirective } from '../../directives/dialog-anchor.directive';
import { DataTablesDirective } from '../../directives/datatables.directive';
import { SituationExchange } from '../../models/situation-exchange';

@Component({
  selector: 'situation-exchange',
  templateUrl: './situation-exchange.component.html',
  styleUrls: ['./situation-exchange.component.css'],
  entryComponents: [SituationExchangeFormComponent]

})
export class SituationExchangeComponent implements OnInit, AfterViewInit {

  @ViewChild(DialogAnchorDirective)
  dialogAnchor: DialogAnchorDirective;

  @ViewChild(DataTablesDirective)
  private datatables: DataTablesDirective;

  private settings: any;

  private all$: Observable<SituationEchange.State>;

  private draw: number;

  constructor(private service: DataTablesService, private store: Store<reducers.State>) {
  }

  ngOnInit(): void {
    this.settings = {
      serverSide: true,
      ajax: this.update.bind(this),
      scrollX: true,
      scrollY: "70vh",
      deferRender: true,
      scroller: true,
      scrollCollapse: true,
      columnDefs: [
        { orderable: false, targets: 0 }
      ],
      columns: [
        {
          orderable: false,
          searchable: false,
          defaultContent: `<button id="update" type="button" class="btn btn-primary btn-sm" aria-label="Left Align">
                            <span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span>
                          </button>
                          <button id="delete" type="button" class="btn btn-danger btn-sm" aria-label.data["0"].Source.SourceType="Left Align">
                            <span class="glyphicon glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                          </button>`
        },
        { data: "SituationNumber.value" },
        { data: "Source.SourceType" },
        { data: "Progress" },
        { data: "QualityIndex" },
        { data: "Reality" },
        { data: "UnknownReason" },
        { data: "MiscellaneousReason" },
        { data: "PersonnelReason" },
        { data: "EquipmentReason" },
        { data: "EnvironmentReason" },
        { data: "UndefinedReason" },
        { data: "PublicEventReason" },
        { data: "Severity" },
        { data: "Sensitivity" },
        { data: "Audience" },
        { data: "ScopeType" },
        { data: "Keywords" },
        { data: "Summary.0.value" },
        { data: "Description.0.value" },
      ]
    }

    this.all$ = this.store.select(reducers.selectSituationEchangeState);
    this.all$.filter(t => t.draw == this.draw).subscribe(t => {
      this.datatables.instance.ajax.reload();
    });
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

  onClick(e: any) {
    switch (e.id) {
      case "create":
      case "update":
        let dialog: ComponentRef<any> = this.dialogAnchor.create(SituationExchangeFormComponent, e);
        dialog.instance.modal();
        break;
      case "delete":
        let situation: SituationExchange = <SituationExchange>e.data;
        this.store.dispatch(new SituationExchangeActions.DeleteAction(situation.SituationNumber.value));
        break;
      default:
        break;
    }
  }

  private update(data: any, callback: ((result: any) => void), settings: any) {
    this.all$.first(t => t.draw == data.draw).subscribe(t => {
      this.draw = t.draw;
      let array = Object.keys(t.entities).map(u => t.entities[u]);
      let result = <any>Object.assign({}, {
        data: array,
        recordsFiltered: t.recordsFiltered,
        recordsTotal: t.recordsTotal,
        draw: data.draw,
      });
      callback(result);
    });

    this.store.dispatch(new SituationExchangeActions.AllAction(data));
  }

}
