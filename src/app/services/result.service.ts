import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result } from '../types/result';
import { ResultRequest } from '../types/result-request';

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

  public getFiltred(uriParams: any): Observable<Result[]> {
    let queryParams = new HttpParams()
      .set("raceId", uriParams.raceId);
    return this.httpClient.get(`${environment.backend.api}/result/filtred/`, { params: queryParams }).pipe(
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

  public update(id: string, form: ResultRequest) {
    return this.httpClient.patch(`${environment.backend.api}/result/${id}`, form).pipe(
      map((res: any) => {
        return <Result>this.resultAsObservable;
      }
      )
    );
  }
}
