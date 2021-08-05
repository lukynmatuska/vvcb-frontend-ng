import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResultTemplate } from '../types/result-template';

@Injectable({
  providedIn: 'root'
})
export class ResultTemplateService {

  constructor(private readonly httpClient: HttpClient) { }

  public getResultTemplates(): Observable<ResultTemplate[]> {
    return this.httpClient.get(`${environment.backend.api}/result-template`).pipe(
      map(
        (res: any) => {
          return res.map(
            (resultTemplates: any) => <ResultTemplate>resultTemplates
          );
        }
      )
    );
  }
}