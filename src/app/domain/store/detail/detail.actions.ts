import { createAction, props } from '@ngrx/store';
import { IDetail } from 'src/app/core/models/detail.model';
export const getDetailAction = createAction('[Detail] GetDetailAction');
export const successDetailAction = createAction(
  '[Detail]SuccessDetailAction',
  props<{ detail: IDetail }>()
);