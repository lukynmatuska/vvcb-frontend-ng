import { Component, Input, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-result-table-action-bar',
  templateUrl: './result-table-action-bar.component.html',
  styleUrls: ['./result-table-action-bar.component.scss']
})
export class ResultTableActionBarComponent implements OnInit {

  @Input("result") result!: Result;

  constructor(private readonly resultService: ResultService) { }

  ngOnInit(): void {
  }

  public delete() {
    if (this.result.id) {
      this.resultService.delete(this.result.id).subscribe(
        () => {
          this.resultService.deleteResult(this.result)
        }
      );
    }
  }

  public edit() {
    console.log("edit result")
  }

}
