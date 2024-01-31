import { IDetail } from 'src/app/core/models/detail.model';

export interface DetailState {
  detail: IDetail | null;
  loadingDetail: boolean | null;
}