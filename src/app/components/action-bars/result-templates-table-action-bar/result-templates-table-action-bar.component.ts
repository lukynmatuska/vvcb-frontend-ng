import { Component, Input, OnInit } from '@angular/core';
import { ResultTemplateService } from 'src/app/services/result-template.service';
import { ResultTemplate } from 'src/app/types/result-template';

@Component({
  selector: 'app-result-templates-table-action-bar',
  templateUrl: './result-templates-table-action-bar.component.html',
  styleUrls: ['./result-templates-table-action-bar.component.scss']
})
export class ResultTemplatesTableActionBarComponent implements OnInit {

  @Input("resutlTemplate") resultTemplate!: ResultTemplate;

  constructor(private readonly resultTemplateService: ResultTemplateService) {
  }

  ngOnInit(): void {
  }

  public add() {
    this.resultTemplateService.registerResultTemplate(this.resultTemplate);
  }

  public delete() {
    if (this.resultTemplate.id)
      this.resultTemplateService.delete(this.resultTemplate.id).subscribe(
        () => {
          this.resultTemplateService.deleteResultTemplate(this.resultTemplate);
        }
      );
  }
}
