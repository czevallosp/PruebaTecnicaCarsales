import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDetail } from 'src/app/core/models/detail.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private _http: HttpClient) {}

  getDetails(id: number) {
    return this._http.get<IDetail>(`${environment.baseUrlAPI}/${id}`);
  }
}
