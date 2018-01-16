import { Action } from '@ngrx/store';
import { SituationExchange } from '../models/situation-exchange';

export const ActionTypes = {
    ALL: 'SITUATION_EXCHANGE_ALL',
    ALL_SUCCESS: 'SITUATION_EXCHANGE_ALL_SUCCESS',
    ALL_FAILURE: 'SITUATION_EXCHANGE_ALL_FAILURE',
    CREATE: 'SITUATION_EXCHANGE_CREATE',
    CREATE_SUCCESS: 'SITUATION_EXCHANGE_CREATE_SUCCESS',
    CREATE_FAILURE: 'SITUATION_EXCHANGE_CREATE_FAILURE',
    READ: 'SITUATION_EXCHANGE_READ',
    READ_SUCCESS: 'SITUATION_EXCHANGE_READ_SUCCESS',
    READ_FAILURE: 'SITUATION_EXCHANGE_READ_FAILURE',
    UPDATE: 'SITUATION_EXCHANGE_UPDATE',
    UPDATE_SUCCESS: 'SITUATION_EXCHANGE_UPDATE_SUCCESS',
    UPDATE_FAILURE: 'SITUATION_EXCHANGE_UPDATE_FAILURE',
    DELETE: 'SITUATION_EXCHANGE_DELETE',
    DELETE_SUCCESS: 'SITUATION_EXCHANGE_DELETE_SUCCESS',
    DELETE_FAILURE: 'SITUATION_EXCHANGE_DELETE_FAILURE',
};

export class AllAction implements Action {

    type = ActionTypes.ALL;

    constructor(public payload: any) { }
}

export class AllSuccessAction implements Action {

    type = ActionTypes.ALL_SUCCESS;

    constructor(public payload: SituationExchange[]) { }
}

export class AllFailureAction implements Action {

    type = ActionTypes.ALL_FAILURE;

    constructor(public payload: Error) { }
}

export class CreateAction implements Action {

    type = ActionTypes.CREATE;

    constructor(public payload: SituationExchange) { }
}

export class CreateSuccessAction implements Action {

    type = ActionTypes.CREATE_SUCCESS;

    constructor(public payload: SituationExchange) { }
}

export class CreateFailureAction implements Action {

    type = ActionTypes.CREATE_FAILURE;

    constructor(public payload: Error) { }
}

export class ReadAction implements Action {

    type = ActionTypes.READ;

    constructor(public payload: string) { }
}

export class ReadSuccessAction implements Action {

    type = ActionTypes.READ_SUCCESS;

    constructor(public payload: SituationExchange) { }
}

export class ReadFailureAction implements Action {

    type = ActionTypes.READ_FAILURE;

    constructor(public payload: Error) { }
}

export class UpdateAction implements Action {

    type = ActionTypes.UPDATE;

    constructor(public payload: SituationExchange) { }
}

export class UpdateSuccessAction implements Action {

    type = ActionTypes.UPDATE_SUCCESS;

    constructor(public payload: SituationExchange) { }
}

export class UpdateFailureAction implements Action {

    type = ActionTypes.UPDATE_FAILURE;

    constructor(public payload: Error) { }
}

export class DeleteAction implements Action {

    type = ActionTypes.DELETE;

    constructor(public payload: string) { }
}

export class DeleteSuccessAction implements Action {

    type = ActionTypes.DELETE_SUCCESS;

    constructor(public payload: string) { }
}

export class DeleteFailureAction implements Action {

    type = ActionTypes.DELETE_SUCCESS;

    constructor(public payload: Error) { }
}

export type Actions = AllAction | AllSuccessAction | AllFailureAction
    | CreateAction | CreateSuccessAction | CreateFailureAction
    | ReadAction | ReadSuccessAction | ReadFailureAction
    | UpdateAction | UpdateSuccessAction | UpdateFailureAction
    | DeleteAction | DeleteSuccessAction | DeleteFailureAction;
