import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';


import { Modal } from '../../directives/dialog-anchor.directive';
import { SituationExchangeType } from './situation-exchange-type';
import * as reducers from '../../reducers';
import * as SituationExchangeActions from '../../actions/situation-exchange-actions';
import { SituationExchange, Value } from '../../models/situation-exchange';

declare var $: any;

@Component({
  selector: 'situation-exchange-form',
  templateUrl: './situation-exchange-form.component.html',
  styleUrls: ['./situation-exchange-form.component.css']
})
export class SituationExchangeFormComponent extends Modal implements OnInit {

  private data = SituationExchangeType;

  private formGroup: FormGroup;

  private current$: Observable<SituationExchange>;

  constructor(private fb: FormBuilder, private store: Store<reducers.State>) {
    super();
  }

  @ViewChild('dialog')
  dialog: ElementRef;

  ngOnInit() {

    let now = new Date();

    this.formGroup = this.fb.group({
      creationTime: [now, []],
      participantRef: ["", []],
      situationNumber: ["", []],
      version: [now.getTime(), []],
      sourceType: ["directReport", []],
      progress: ["draft", []],
      qualityIndex: ["certain", []],
      reality: ["real", []],
      unknownReason: ["", []],
      miscellaneousReason: ["pti19_0", []],
      personnelReason: ["pti20_0", []],
      equipmentReason: ["pti21_0", []],
      environmentReason: ["pti22_0", []],
      undefinedReason: ["", []],
      publicEventReason: ["agriculturalShow", []],
      severity: ["pti26_0", []],
      sensitivity: ["veryHigh", []],
      audience: ["public", []],
      scopeType: ["general", []],
      keywords: ["", []],
      summary: ["", []],
      description: ["", []],
    });

    this.current$ = this.store.select(reducers.situationEchangeCurrent);
    this.current$.filter(t => t !== undefined).subscribe(t => this.initialize(t));
    let situation: SituationExchange = <SituationExchange> this.action.data;
    if (situation) {
      this.store.dispatch(new SituationExchangeActions.ReadAction(situation.SituationNumber.value));
    }
  }

  onSubmit(value: any) {
    let payload = this.create(value);
    if (this.action.id === "create") {
      this.store.dispatch(new SituationExchangeActions.CreateAction(payload));
    } else {
      this.store.dispatch(new SituationExchangeActions.UpdateAction(payload));
    }
  }

  public modal(options?: any): void {
    super.modal(this.dialog, options);
  }

  private initialize(entity: SituationExchange): void {
    let controls = this.formGroup.controls;
    controls["creationTime"].setValue(entity.CreationTime);
    controls["participantRef"].setValue(entity.ParticipantRef.value);
    controls["situationNumber"].setValue(entity.SituationNumber.value);
    controls["version"].setValue(entity.Version.value);
    controls["sourceType"].setValue(entity.Source.SourceType);
    controls["progress"].setValue(entity.Progress);
    controls["qualityIndex"].setValue(entity.QualityIndex);
    controls["reality"].setValue(entity.Reality);
    controls["unknownReason"].setValue(entity.UnknownReason);
    controls["miscellaneousReason"].setValue(entity.MiscellaneousReason);
    controls["personnelReason"].setValue(entity.PersonnelReason);
    controls["equipmentReason"].setValue(entity.EquipmentReason);
    controls["environmentReason"].setValue(entity.EnvironmentReason);
    controls["undefinedReason"].setValue(entity.UndefinedReason);
    controls["publicEventReason"].setValue(entity.PublicEventReason);
    controls["severity"].setValue(entity.Severity);
    controls["sensitivity"].setValue(entity.Sensitivity);
    controls["audience"].setValue(entity.Audience);
    controls["scopeType"].setValue(entity.ScopeType);
    controls["keywords"].setValue(entity.Keywords);
    controls["summary"].setValue(entity.Summary[0].value);
    controls["description"].setValue(entity.Description[0].value);
  }

  private create(form: any): SituationExchange {
    let entity: SituationExchange = new SituationExchange();
    entity.CreationTime = form.creationTime;
    entity.ParticipantRef.value = form.participantRef;
    entity.SituationNumber.value = form.situationNumber;
    entity.Version.value = form.version;
    entity.Source.SourceType = form.sourceType;
    entity.Progress = form.progress;
    entity.QualityIndex = form.qualityIndex;
    entity.Reality = form.reality;
    entity.UnknownReason = form.unknownReason;
    entity.MiscellaneousReason = form.miscellaneousReason;
    entity.PersonnelReason = form.personnelReason;
    entity.EquipmentReason = form.equipmentReason;
    entity.EnvironmentReason = form.environmentReason;
    entity.UndefinedReason = form.undefinedReason;
    entity.PublicEventReason = form.publicEventReason;
    entity.Severity = form.severity;
    entity.Sensitivity = form.sensitivity;
    entity.Audience = form.audience;
    entity.ScopeType = form.scopeType;
    entity.Keywords = form.keywords;
    entity.Summary = <Value[]>[{ value: form.summary }];
    entity.Description = <Value[]>[{ value: form.description }];
    return entity;
  }

}