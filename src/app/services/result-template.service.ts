import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResultTemplate } from '../types/result-template';

@Injectable({
  providedIn: 'root'
})
export class ResultTemplateService {

  private resultTemplateSource = new Subject<ResultTemplate>();

  public resultTemplateAsObservable(){
    return this.resultTemplateSource.asObservable();
  }

  public registerResultTemplate(resultTemplate: ResultTemplate){
    this.resultTemplateSource.next(resultTemplate);
  }

  private resultTemplateDeleteSource = new Subject<ResultTemplate>();

  public resultTemplateDeleteAsObservable(){
    return this.resultTemplateDeleteSource.asObservable();
  }

  public deleteResultTemplate(resultTemplate: ResultTemplate){
    this.resultTemplateDeleteSource.next(resultTemplate);
  }

  constructor(private readonly httpClient: HttpClient) { }

  public getResultTemplates(): Observable<ResultTemplate[]>{
    return this.httpClient.get(`${environment.backend.api}/result-template`).pipe(
      map(
        (res: any) => {
          return res.map(
            (resultTemplate: any) => <ResultTemplate>resultTemplate
          );
        }
      )
    );
  }

  public delete(id: string): Observable<ResultTemplate>{
    return this.httpClient.delete(`${environment.backend.api}/result-template/${id}`).pipe(
      map(
        (res: any) => {
          return <ResultTemplate>res;
        }
      )
    );
  }
}
