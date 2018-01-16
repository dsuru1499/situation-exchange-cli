import { Action } from '@ngrx/store';
import { LinesDiscovery } from '../models/lines-discovery';

export const ActionTypes = {
    ALL: 'LINES_DISCOVERY_ALL',
    ALL_SUCCESS: 'LINES_DISCOVERY_ALL_SUCCESS',
    ALL_FAILURE: 'LINES_DISCOVERY_ALL_FAILURE',
};

export class AllAction implements Action {

    type = ActionTypes.ALL;

    constructor(public payload: any) { }
}

export class AllSuccessAction implements Action {

    type = ActionTypes.ALL_SUCCESS;

    constructor(public payload: LinesDiscovery[]) { }
}

export class AllFailureAction implements Action {

    type = ActionTypes.ALL_FAILURE;

    constructor(public payload: Error) { }
}

export type Actions = AllAction | AllSuccessAction | AllFailureAction;
