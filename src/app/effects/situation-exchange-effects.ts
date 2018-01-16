import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from "rxjs/Rx"
import *  as qs from 'qs';

import * as SituationExchangeActions from '../actions/situation-exchange-actions';
import { SituationExchangeService } from '../services/situation-exchange.service';
import { DataTablesService } from '../services/datatables.service';
import * as reducers from '../reducers';

@Injectable()
export class SituationExchangeEffects {

    static URL: string = "http://localhost:8080/services/siri-lite/situation-exchange/ext";

    constructor(private actions$: Actions,
        private datatables: DataTablesService,
        private service: SituationExchangeService) { }

    @Effect() all$: Observable<Action> = this.actions$
        .ofType(SituationExchangeActions.ActionTypes.ALL)
        .debounceTime(300)
        .map((action: SituationExchangeActions.AllAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            const next$ = this.actions$.ofType(SituationExchangeActions.ActionTypes.ALL).skip(1);
            const url: string = "http://localhost:8080/services/siri-lite/situation-exchange/datatables";
            return this.datatables.all(url, payload)
                .takeUntil(next$)
                .map(data => new SituationExchangeActions.AllSuccessAction(data))
                .catch(error => Observable.of(new SituationExchangeActions.AllFailureAction(error)));
        });

    @Effect() create$: Observable<Action> = this.actions$
        .ofType(SituationExchangeActions.ActionTypes.CREATE)
        .debounceTime(300)
        .map((action: SituationExchangeActions.CreateAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            let url: string = SituationExchangeEffects.URL;
            const next$ = this.actions$.ofType(SituationExchangeActions.ActionTypes.CREATE).skip(1);
            return this.service.create(url, payload)
                .takeUntil(next$)
                .map(data => new SituationExchangeActions.CreateSuccessAction(data))
                .catch(error => Observable.of(new SituationExchangeActions.CreateFailureAction(error)));
        });


    @Effect() read$: Observable<Action> = this.actions$
        .ofType(SituationExchangeActions.ActionTypes.READ)
        .debounceTime(300)
        .map((action: SituationExchangeActions.ReadAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            let url: string = SituationExchangeEffects.URL + "?id=" + payload;
            const next$ = this.actions$.ofType(SituationExchangeActions.ActionTypes.READ).skip(1);
            return this.service.read(url)
                .takeUntil(next$)
                .map(data => new SituationExchangeActions.ReadSuccessAction(data[0]))
                .catch(error => Observable.of(new SituationExchangeActions.ReadFailureAction(error)));
        });


    @Effect() update$: Observable<Action> = this.actions$
        .ofType(SituationExchangeActions.ActionTypes.UPDATE)
        .debounceTime(300)
        .map((action: SituationExchangeActions.UpdateAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            console.log(payload)
            let url: string = SituationExchangeEffects.URL + "?id=" + payload.SituationNumber.value;
            const next$ = this.actions$.ofType(SituationExchangeActions.ActionTypes.UPDATE).skip(1);
            return this.service.update(url, payload)
                .takeUntil(next$)
                .map(data => new SituationExchangeActions.UpdateSuccessAction(data))
                .catch(error => Observable.of(new SituationExchangeActions.UpdateFailureAction(error)));
        });


    @Effect() delete$: Observable<Action> = this.actions$
        .ofType(SituationExchangeActions.ActionTypes.DELETE)
        .debounceTime(300)
        .map((action: SituationExchangeActions.DeleteAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            let url: string = SituationExchangeEffects.URL + "?id=" + payload;
            const next$ = this.actions$.ofType(SituationExchangeActions.ActionTypes.DELETE).skip(1);
            return this.service.delete(url)
                .takeUntil(next$)
                .map(data => new SituationExchangeActions.DeleteSuccessAction(payload))
                .catch(error => Observable.of(new SituationExchangeActions.DeleteFailureAction(error)));
        });
}