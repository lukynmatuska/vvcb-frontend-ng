import { Component, Input, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-result-action-bar',
  templateUrl: './result-action-bar.component.html',
  styleUrls: ['./result-action-bar.component.scss']
})
export class ResultActionBarComponent implements OnInit {

  // @Input("result") result!: Result;

  constructor(private readonly resultService: ResultService) { }

  ngOnInit(): void {
  }

  public add() {
    console.log("add");
    // this.resultService.registerResult(this.result);
  }
}
