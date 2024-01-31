import { createAction, props } from '@ngrx/store';
import { IEpisodes } from 'src/app/core/models/episodes.model';
export const getEpisodesAction = createAction('[Episodes] GetEpisodesAction');
export const successEpisodesAction = createAction(
  '[Episodes]SuccessEpisodesAction',
  props<{ episodes: IEpisodes[] }>()
);