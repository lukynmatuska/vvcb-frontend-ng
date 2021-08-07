import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result } from '../types/result';
import { ResultRequest } from '../types/result-request';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private resultSource = new Subject<Result>();

  public resultAsObservable() {
    return this.resultSource.asObservable();
  }

  public registerResult(result: Result) {
    this.resultSource.next(result);
  }

  private resultDeleteSource = new Subject<Result>();

  public resultDeleteAsObservable() {
    return this.resultDeleteSource.asObservable();
  }

  public deleteResult(result: Result) {
    this.resultDeleteSource.next(result);
  }

  constructor(private readonly httpClient: HttpClient) { }

  public createResult(result: ResultRequest): Observable<Result> {
    return this.httpClient.post(`${environment.backend.api}/result`, result).pipe(
      map(
        (res: any) => <Result>res
      )
    );
  }

  public getResults(): Observable<Result[]> {
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

  public getFiltred(uriParams: string): Observable<Result[]> {
    return this.httpClient.get(`${environment.backend.api}/result/filtred${uriParams}`).pipe(
      map(
        (res: any) => {
          return res.map(
            (result: any) => <Result>result
          );
        }
      )
    );
  }

  public delete(id: string): Observable<Result> {
    return this.httpClient.delete(`${environment.backend.api}/result/${id}`).pipe(
      map(
        (res: any) => {
          return <Result>res;
        }
      )
    )
  }
}
