import { IEpisodes } from 'src/app/core/models/episodes.model';

export interface EpisodesState {
  episodes: IEpisodes[] | null;
  loadingEpisodes: boolean | null;
}