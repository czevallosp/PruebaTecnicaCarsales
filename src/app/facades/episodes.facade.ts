import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as episodesSelectors from '../domain/store/episodes/episodes.selectors';
import { RootState } from '../domain/store';
import { getEpisodesAction } from '../domain/store/episodes/episodes.actions';
import { IEpisodes } from '@app/core/models/episodes.model';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  isLoadingEpisodes$: Observable<boolean | null>;
  episodes$: Observable<IEpisodes []| null>;
  constructor(
    private readonly _store: Store<RootState>,
    private _storee: Store
  ) {
    this.isLoadingEpisodes$ = this._store.select(episodesSelectors.selectIsLoadingEpisodes);
    this.episodes$ = this._store.select(episodesSelectors.selectEpisodes);
  }

  getEpisodes() {
    this._store.dispatch(getEpisodesAction());
  }
}