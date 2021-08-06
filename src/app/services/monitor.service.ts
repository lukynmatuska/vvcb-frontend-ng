import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Monitors } from '../types/monitors';

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
}
