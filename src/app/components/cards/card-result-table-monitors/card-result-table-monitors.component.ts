import { Component, Input, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { RaceCategory } from 'src/app/types/race-category';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-card-result-table-monitors',
  templateUrl: './card-result-table-monitors.component.html',
  styleUrls: ['./card-result-table-monitors.component.scss']
})
export class CardResultTableMonitorsComponent implements OnInit {

  @Input("raceCategory") raceCategory: RaceCategory = { category: { name: "Příkladová kategorie" }, rules: { name: "Test-2B" } };
  @Input("raceId") raceId!: string;

  public results: Result[] = [];

  constructor(
    private readonly resultService: ResultService,
    private readonly socketService: SocketService
  ) {
    this.socketService.on(
      "new-result",
      (result: Result) => {
        if (
          result.team?.category == this.raceCategory.category.id &&
          result.race?.id == this.raceId
        ) {
          this.results.push(result);
          // this.results.sort(this.compareResults)
        }
      }
    )
  }

  ngOnInit(): void {
    this.resultService.getResults().subscribe(
      (results) => {
        this.results = results;
      }
    )
  }

  /*private compareResults(first: Result, second: Result) {
    if (first.time?.final < second.time?.final) {
      return -1;
    }
    if (first.time?.final > second.time?.final) {
      return 1;
    }
    return 0;
  }*/

}
