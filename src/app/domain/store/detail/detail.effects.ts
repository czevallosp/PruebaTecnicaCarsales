import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as detailActions from './detail.actions';
import { map, switchMap } from 'rxjs/operators';
import { DetailService } from 'src/app/data/services/detail/detail.service';

@Injectable()
export class DetailEffects {
  constructor(
    private actions$: Actions,
    private _router: Router,
    private _detailService: DetailService
  ) {}

  getDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(detailActions.getDetailAction),
      switchMap((action) =>
        this._detailService.getDetails(2).pipe(
          map((response) => {
            const detail = response;
            return detailActions.successDetailAction({ detail });
          })
        )
      )
    )
  );
}