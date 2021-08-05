import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-results-table-monitors',
  templateUrl: './results-table-monitors.component.html',
  styleUrls: ['./results-table-monitors.component.scss']
})
export class ResultsTableMonitorsComponent implements OnInit {
  public result: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
