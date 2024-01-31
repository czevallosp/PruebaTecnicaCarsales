import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisodes } from 'src/app/core/models/episodes.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor(private _http: HttpClient) {}

  getEpisodes(page = 200) : Observable<IEpisodes[]>{
    return this._http.get<IEpisodes[]>(`${environment.baseUrlAPI}?page=${page}`); 
  }
  
}
