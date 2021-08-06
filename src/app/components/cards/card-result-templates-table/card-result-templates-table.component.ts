import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultTemplateService } from 'src/app/services/result-template.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { ResultTemplate } from 'src/app/types/result-template';

@Component({
  selector: 'app-card-result-templates-table',
  templateUrl: './card-result-templates-table.component.html',
  styleUrls: ['./card-result-templates-table.component.scss']
})
export class CardResultTemplatesTableComponent implements OnInit {

  public resultTemplates: ResultTemplate[] = [];

  constructor(private readonly resultTemplateService: ResultTemplateService, private readonly socketService: SocketService) {
    this.socketService.on(
      "new-result-template",
      (resultTemplate: ResultTemplate) => {
        this.resultTemplates.push(resultTemplate);
      }
    );

    this.socketService.on(
      "delete-result-template",
      (resultTemplate: ResultTemplate) => {
        let found = this.resultTemplates.filter((value) => value.id === resultTemplate.id);
        if(found[0]){
          this.delete(found[0]);
        }
      }
    );
  }

  ngOnInit(): void {
    this.resultTemplateService.getResultTemplates().subscribe(
      (resultTemplates) => {
        this.resultTemplates = resultTemplates;
      }
    );

    this.resultTemplateService.resultTemplateDeleteAsObservable().subscribe(
      (resultTemplate) => {
        this.delete(resultTemplate);
      }
    );
  }

  private delete(resultTemplate: ResultTemplate){
    this.resultTemplates.splice(this.resultTemplates.indexOf(resultTemplate), 1);
  }

  public prettifyDate(date?: Date) {
    moment.locale("cs");
    return moment(date).calendar();
  }

}
