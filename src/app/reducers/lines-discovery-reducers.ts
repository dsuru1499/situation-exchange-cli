import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ActionTypes, Actions } from '../actions/lines-discovery-actions';
import { LinesDiscovery } from '../models/lines-discovery';

export interface State extends EntityState<LinesDiscovery> {
    selected: string | null;
    recordsFiltered: number;
    recordsTotal: number;
    draw: number;
}

export const adapter: EntityAdapter<LinesDiscovery> = createEntityAdapter<LinesDiscovery>({
    selectId: (t: LinesDiscovery) => t.LineRef.value
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
            let entities: LinesDiscovery[] = [];
            actions.payload.data.map(t => entities.push(<LinesDiscovery>t));
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