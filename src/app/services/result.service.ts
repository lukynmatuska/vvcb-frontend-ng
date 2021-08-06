import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result } from '../types/result';
import { ResultRequest } from '../types/result-request';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private readonly httpClient: HttpClient) { }

  public createResult(result: ResultRequest): Observable<Result>{
    return this.httpClient.post(`${environment.backend.api}/result`, result).pipe(
      map(
        (res: any) => <Result>res
      )
    );
  }

  public getResults(): Observable<Result[]>{
    return this.httpClient.get(`${environment.backend.api}/result`).pipe(
      map(
        (res: any) => {
          return res.map(
            (result: any) => <Result>result
          );
        }
      )
    );
  }
}
