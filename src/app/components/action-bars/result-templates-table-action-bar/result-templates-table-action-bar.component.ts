import { Component, Input, OnInit } from '@angular/core';
import { CardResultCreateService } from 'src/app/services/card-result-create.service';
import { ResultTemplate } from 'src/app/types/result-template';

@Component({
  selector: 'app-result-templates-table-action-bar',
  templateUrl: './result-templates-table-action-bar.component.html',
  styleUrls: ['./result-templates-table-action-bar.component.scss']
})
export class ResultTemplatesTableActionBarComponent implements OnInit {

  @Input("resutlTemplate") resultTemplate!: ResultTemplate;

  constructor(private readonly cardResultCreateService: CardResultCreateService) { 
  }
  
  ngOnInit(): void {
  }
  
  public add(){
    this.cardResultCreateService.registerResultTemplate(this.resultTemplate);
  }

}
