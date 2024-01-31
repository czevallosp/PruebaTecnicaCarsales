import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { DetailState } from './detail.state';

export const selectDetailFeatureState = (state: RootState) => state.detail;

export const selectIsLoadingDetail = createSelector(
  selectDetailFeatureState,
  (state: DetailState) => state.loadingDetail
);

export const selectDetail = createSelector(
  selectDetailFeatureState,
  (state: DetailState) => state.detail
);