import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultService } from 'src/app/services/result.service';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-card-result-table',
  templateUrl: './card-result-table.component.html',
  styleUrls: ['./card-result-table.component.scss']
})
export class CardResultTableComponent implements OnInit {

  public results: Result[] = [];

  constructor(private readonly resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResults().subscribe(
      (results) => {
        this.results = results;
      }
    );

    this.resultService.resultDeleteAsObservable().subscribe(
      (result) => {
        this.results.splice(this.results.indexOf(result), 1);
      }
    );
  }

  public prettifyDate(date?: Date) {
    moment.locale("cs");
    return moment(date).calendar();
  }

}
