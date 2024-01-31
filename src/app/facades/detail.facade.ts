import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as detailSelectors from '../domain/store/detail/detail.selectors';
import { RootState } from '../domain/store';
import { getDetailAction } from '../domain/store/detail/detail.actions';
import { IDetail } from '@app/core/models/detail.model';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  isLoadingDetail$: Observable<boolean | null>;
  detail$: Observable<IDetail | null>;
  constructor(
    private readonly _store: Store<RootState>,
    private _storee: Store
  ) {
    this.isLoadingDetail$ = this._store.select(detailSelectors.selectIsLoadingDetail);
    this.detail$ = this._store.select(detailSelectors.selectDetail);
  }

  getDetail() {
    this._store.dispatch(getDetailAction());
  }
}