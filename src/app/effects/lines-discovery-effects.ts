import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from "rxjs/Rx"
import *  as qs from 'qs';

import * as LinesDiscoveryActions from '../actions/lines-discovery-actions';
import { DataTablesService } from '../services/datatables.service';
import * as reducers from '../reducers';

@Injectable()
export class LinesDiscoveryEffects {

    constructor(private actions$: Actions,
        private service: DataTablesService) { }

    @Effect() all$: Observable<Action> = this.actions$
        .ofType(LinesDiscoveryActions.ActionTypes.ALL)
        .debounceTime(300)
        .map((action: LinesDiscoveryActions.AllAction) => action.payload)
        .switchMap(payload => {
            if (payload == undefined) {
                return Observable.empty();
            }
            const next$ = this.actions$.ofType(LinesDiscoveryActions.ActionTypes.ALL).skip(1);
            const url: string = "http://localhost:8080/services/siri-lite/lines-discovery/datatables";
            return this.service.all(url, payload)
                .takeUntil(next$)
                .map(data => new LinesDiscoveryActions.AllSuccessAction(data))
                .catch(error => Observable.of(new LinesDiscoveryActions.AllFailureAction(error)));
        });


}