import { Component, OnInit } from '@angular/core';
import { ResultTemplateService } from 'src/app/services/result-template.service';

@Component({
  selector: 'app-result-action-bar',
  templateUrl: './result-action-bar.component.html',
  styleUrls: ['./result-action-bar.component.scss']
})
export class ResultActionBarComponent implements OnInit {

  constructor(private readonly resultService: ResultTemplateService) { }

  ngOnInit(): void {
  }

  public add() {
    this.resultService.registerResultTemplate({});
  }
}
