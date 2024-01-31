import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { EpisodesState } from './episodes.state';

export const selectEpisodesFeatureState = (state: RootState) => state.episodes;

export const selectIsLoadingEpisodes = createSelector(
  selectEpisodesFeatureState,
  (state: EpisodesState) => state.loadingEpisodes
);

export const selectEpisodes = createSelector(
  selectEpisodesFeatureState,
  (state: EpisodesState) => state.episodes
);