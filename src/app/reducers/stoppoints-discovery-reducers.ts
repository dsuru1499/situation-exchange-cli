import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ActionTypes, Actions } from '../actions/stoppoints-discovery-actions';
import { StoppointsDiscovery } from '../models/stoppoints-discovery';

export interface State extends EntityState<StoppointsDiscovery> {
    selected: string | null;
    recordsFiltered: number;
    recordsTotal: number;
    draw: number;
}

export const adapter: EntityAdapter<StoppointsDiscovery> = createEntityAdapter<StoppointsDiscovery>({
    selectId: (t: StoppointsDiscovery) => t.StopPointRef.value
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
            let entities: StoppointsDiscovery[] = [];
            actions.payload.data.map(t => entities.push(<StoppointsDiscovery>t));
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

        default: {
            return state;
        }
    }
}

export const selected = (state: State) => state.selected;