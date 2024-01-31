import { createReducer, on, Action } from '@ngrx/store';
import * as detailActions from './detail.actions';
import { DetailState } from './detail.state';

export const initialDetailState: DetailState = {
  detail: null,
  loadingDetail: true,
};

const detailReducerInternal = createReducer(
  initialDetailState,
  on(detailActions.successDetailAction, (state, { detail }) => {
    return {
      ...state,
      loadingDetail: false,
      detail,
    };
  }));
export function detailReducer(state: DetailState | undefined, action: Action) {
  return detailReducerInternal(state, action);
}