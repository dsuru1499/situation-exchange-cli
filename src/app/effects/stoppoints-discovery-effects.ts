import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from "rxjs/Rx"
import *  as qs from 'qs';

import * as StoppointsDiscoveryActions from '../actions/stoppoints-discovery-actions';
import { DataTablesService } from '../services/datatables.service';
import * as reducers from '../reducers';

@Injectable()
export class StoppointsDiscoveryEffects {

    constructor(private actions$: Actions,
        private service: DataTablesService,
        private store: Store<reducers.State>) { }

    @Effect() all$: Observable<Action> = this.actions$
        .ofType(StoppointsDiscoveryActions.ActionTypes.ALL)
        .debounceTime(300)
        .map((action: StoppointsDiscoveryActions.AllAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            const next$ = this.actions$.ofType(StoppointsDiscoveryActions.ActionTypes.ALL).skip(1);
            const url: string = "http://localhost:8080/services/siri-lite/stoppoints-discovery/datatables";
            return this.service.all(url, payload)
                .takeUntil(next$)
                .map(data => new StoppointsDiscoveryActions.AllSuccessAction(data))
                .catch(error => Observable.of(new StoppointsDiscoveryActions.AllFailureAction(error)));
        });


}