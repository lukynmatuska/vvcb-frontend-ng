import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-results-table-monitors',
  templateUrl: './results-table-monitors.component.html',
  styleUrls: ['./results-table-monitors.component.scss']
})
export class ResultsTableMonitorsComponent implements OnInit {
  public results: Result[] = [];

  constructor(private readonly resultService: ResultService) { 

  }

  ngOnInit(): void {
    this.resultService.getResults().subscribe(
      (results) => {
        this.results = results;
      }
    );
  }

}
