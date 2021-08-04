import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultTemplate } from 'src/app/types/result-template';

@Component({
  selector: 'app-card-result-templates-table',
  templateUrl: './card-result-templates-table.component.html',
  styleUrls: ['./card-result-templates-table.component.scss']
})
export class CardResultTemplatesTableComponent implements OnInit {

  public resultTemplates: ResultTemplate[] = [];

  constructor() { 
    this.resultTemplates.push({id: "asdf", date: new Date(), time: {left: 1, right: 2}});
  }

  ngOnInit(): void {
  }

  public prettifyDate(date?: Date){
    moment.locale("cs");
    return moment(date).calendar();
  }

}
