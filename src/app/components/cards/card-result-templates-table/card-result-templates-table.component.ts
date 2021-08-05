import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultTemplateService } from 'src/app/services/result-template.service';
import { ResultTemplate } from 'src/app/types/result-template';

@Component({
  selector: 'app-card-result-templates-table',
  templateUrl: './card-result-templates-table.component.html',
  styleUrls: ['./card-result-templates-table.component.scss']
})
export class CardResultTemplatesTableComponent implements OnInit {

  public resultTemplates: ResultTemplate[] = [];

  constructor(private readonly resultTemplateService: ResultTemplateService) {
  }

  ngOnInit(): void {
    this.resultTemplateService.getResultTemplates().subscribe(
      (resultTemplates) => {
        this.resultTemplates = resultTemplates;
      }
    );

    this.resultTemplateService.resultTemplateDeleteAsObservable().subscribe(
      (resultTemplate) => {
        this.resultTemplates.splice(this.resultTemplates.indexOf(resultTemplate), 1);
      }
    );
  }

  public prettifyDate(date?: Date) {
    moment.locale("cs");
    return moment(date).calendar();
  }

}
