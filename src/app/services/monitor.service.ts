import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Monitors } from '../types/monitors';
import { SimpleResultResponse } from '../types/simple-results-response';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(private readonly httpClient: HttpClient) { }

  public getInitData(): Observable<Monitors> {
    return this.httpClient.get(`${environment.backend.api}/monitors`).pipe(
      map(
        (res: Monitors) => {
          return res;
        }
      )
    )
  }

  public getSimpleResults(
    url: String = 'next'
  ): Observable<SimpleResultResponse> {
    return this.httpClient.get(`${environment.middleware.url}/results/${url}`).pipe(
      map(
        (res: SimpleResultResponse) => {
          return res;
        }
      )
    )
  }
}
