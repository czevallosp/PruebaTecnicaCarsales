import { EpisodesEffects } from './episodes/episodes.effects';
import { episodesReducer } from './episodes/episodes.reducer';
import { EpisodesState } from './episodes/episodes.state';
import { DetailEffects } from './detail/detail.effects';
import { detailReducer } from './detail/detail.reducer';
import { DetailState } from './detail/detail.state';

export interface RootState {
  episodes: EpisodesState;
  detail: DetailState;
}

export const appReducer = {
    episodes: episodesReducer,
    detail: detailReducer,
};

export const appEffects = [DetailEffects, EpisodesEffects];