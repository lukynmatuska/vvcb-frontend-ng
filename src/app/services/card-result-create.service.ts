import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResultTemplate } from '../types/result-template';

@Injectable({
  providedIn: 'root'
})
export class CardResultCreateService {

  private resultTemplateSource = new Subject<ResultTemplate>();

  public resultTemplateAsObservable(){
    return this.resultTemplateSource.asObservable();
  }

  public registerResultTemplate(resultTemplate: ResultTemplate){
    this.resultTemplateSource.next(resultTemplate);
  }

  constructor() { }
}
