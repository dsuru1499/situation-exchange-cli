import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ActionTypes, Actions } from '../actions/situation-exchange-actions';
import { SituationExchange } from '../models/situation-exchange';
import { Update } from '@ngrx/entity/src/models';

export interface State extends EntityState<SituationExchange> {
    selected: string | null;
    recordsFiltered: number;
    recordsTotal: number;
    draw: number;
}

export const adapter: EntityAdapter<SituationExchange> = createEntityAdapter<SituationExchange>({
    selectId: (t: SituationExchange) => t.SituationNumber.value
});

export const initialState: State = adapter.getInitialState({
    selected: null,
    recordsFiltered: 0,
    recordsTotal: 0,
    draw: 0
});

export function reducer(state = initialState, actions: Actions): State {
    
    switch (actions.type) {

        case ActionTypes.ALL_SUCCESS: {
            let entities: SituationExchange[] = [];
            actions.payload.data.map(t => entities.push(<SituationExchange>t));
            let result = adapter.addAll(entities, state);
            result.recordsFiltered = actions.payload.recordsFiltered;
            result.recordsTotal = actions.payload.recordsTotal;
            result.draw = actions.payload.draw;
            result.selected = null;
            return result;
        }

        case ActionTypes.ALL_FAILURE: {
            return state;
        }

        case ActionTypes.CREATE_SUCCESS: {
            let entity = <SituationExchange>actions.payload;
            let result = adapter.addOne(entity, state);
            result.selected = null;
            return result;
        }

        case ActionTypes.CREATE_FAILURE: {
            return state;
        }

        case ActionTypes.READ_SUCCESS: {
            let payload = <SituationExchange>actions.payload;
            let result = adapter.updateOne({
                id: payload.SituationNumber.value,
                changes: payload 
            }, state);
            result.selected = payload.SituationNumber.value;
            return result;
        }

        case ActionTypes.READ_FAILURE: {
            return state;
        }

        case ActionTypes.UPDATE_SUCCESS: {
            let payload = <SituationExchange>actions.payload;
            let result = adapter.updateOne({
                id: payload.SituationNumber.value,
                changes: { [payload.SituationNumber.value]: payload }
            }, state);
            result.selected = null;
            return result;
        }

        case ActionTypes.UPDATE_FAILURE: {
            return state;
        }

        case ActionTypes.DELETE_SUCCESS: {
            let payload = <string>actions.payload;
            let result = adapter.removeOne(payload, state);
            result.selected = null;
            return result;
        }

        case ActionTypes.DELETE_FAILURE: {
            return state;
        }

        default: {
            return state;
        }
    }
}

export const selected = (state: State) => state.selected;