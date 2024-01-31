import { createReducer, on, Action } from '@ngrx/store';
import * as detailActions from './episodes.actions';
import { EpisodesState } from './episodes.state';

export const initialEpisodesState: EpisodesState = {
episodes: null,
  loadingEpisodes: true,
};

const episodesReducerInternal = createReducer(
  initialEpisodesState,
  on(detailActions.successEpisodesAction, (state, { episodes }) => {
    return {
      ...state,
      loadingEpisodes: false,
      episodes,
    };
  }));
export function episodesReducer(state: EpisodesState | undefined, action: Action) {
  return episodesReducerInternal(state, action);
}