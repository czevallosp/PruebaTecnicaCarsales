import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as episodesActions from './episodes.actions';
import { map, switchMap } from 'rxjs/operators';
import { EpisodesService } from 'src/app/data/services/episodes/episodes.service';

@Injectable()
export class EpisodesEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private _episodesService: EpisodesService
  ) {}

  getEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(episodesActions.getEpisodesAction),
      switchMap((action) =>
        this._episodesService.getEpisodes().pipe(
          map((response) => {
            const episodes = response;
            return episodesActions.successEpisodesAction({ episodes });
          })
        )
      )
    )
  );
}