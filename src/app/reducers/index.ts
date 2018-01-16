import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as LinesDiscovery from './lines-discovery-reducers';
import * as StoppointsDiscovery from './stoppoints-discovery-reducers';
import * as SituationEchange from './situation-exchange-reducers';

export interface State {
    lines_discovery: LinesDiscovery.State;
    stoppoints_discovery: StoppointsDiscovery.State;
    situation_exchange: SituationEchange.State;
}

export const reducers: ActionReducerMap<State> = {
    lines_discovery: LinesDiscovery.reducer,
    stoppoints_discovery: StoppointsDiscovery.reducer,
    situation_exchange: SituationEchange.reducer
};

export const selectLinesDiscoveryState = createFeatureSelector<LinesDiscovery.State>("lines_discovery");
export const {
    selectIds: linesDiscoveryIds,
    selectEntities: linesDiscoveryEntities,
    selectAll: linesDiscoveryAll,
    selectTotal: linesDiscoveryTotal
  } = LinesDiscovery.adapter.getSelectors(selectLinesDiscoveryState);
export const linesDiscoveryCurrentId = createSelector(selectLinesDiscoveryState, LinesDiscovery.selected);
export const linesDiscoveryCurrent = createSelector(linesDiscoveryEntities, linesDiscoveryCurrentId, (list, id) => list[id]);

export const selectStoppointsDiscoveryState = createFeatureSelector<StoppointsDiscovery.State>("stoppoints_discovery");
export const {
    selectIds: stoppointsDiscoveryIds,
    selectEntities: stoppointsDiscoveryEntities,
    selectAll: stoppointsDiscoveryAll,
    selectTotal: stoppointsDiscoveryTotal
  } = StoppointsDiscovery.adapter.getSelectors(selectStoppointsDiscoveryState);
export const stoppointsDiscoveryCurrentId = createSelector(selectStoppointsDiscoveryState, StoppointsDiscovery.selected);
export const stoppointsDiscoveryCurrent = createSelector(stoppointsDiscoveryEntities, stoppointsDiscoveryCurrentId, (list, id) => list[id]);

export const selectSituationEchangeState = createFeatureSelector<SituationEchange.State>("situation_exchange");
export const {
    selectIds: situationEchangeIds,
    selectEntities: situationEchangeEntities,
    selectAll: situationEchangeAll,
    selectTotal: situationEchangeTotal
  } = SituationEchange.adapter.getSelectors(selectSituationEchangeState);
export const situationEchangeCurrentId = createSelector(selectSituationEchangeState, SituationEchange.selected);
export const situationEchangeCurrent = createSelector(situationEchangeEntities, situationEchangeCurrentId, (list, id) => list[id]);
