import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { RaceCategory } from 'src/app/types/race-category';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-card-result-table-race',
  templateUrl: './card-result-table-race.component.html',
  styleUrls: ['./card-result-table-race.component.scss']
})
export class CardResultTableRaceComponent implements OnInit {

  @Input("raceCategory") raceCategory!: RaceCategory;
  @Input("raceId") raceId?: string;
  public results: Result[] = [];

  constructor(private readonly resultService: ResultService, private readonly socketService: SocketService) { 
    this.socketService.on(
      "new-result",
      (result: Result) => {
        if (
          result.team?.category == this.raceCategory.category.id &&
          result.race?.id == this.raceId
        ) {
          //@ts-ignore
          this.results.push(result);
          this.sort();
          this.recalcPoints();
        }
      }
    )
  }

  ngOnInit(): void {
    this.resultService.getFiltred({ raceId: this.raceId }).subscribe(
      (results: Result[]) => {
        console.log(results);
        for (const result of results) {
          if (result.team?.category == this.raceCategory.category.id) {
            this.results.push(result);
          }
        }
        this.sort();
        this.recalcPoints();
      }
    )
  }
  private sort() {
    //@ts-ignore
    this.results = this.results.sort(
      (a, b) => {
        if(a.time?.final === 0){
          return 1;
        }

        if(b.time?.final === 0){
          return -1;
        }
      
        //@ts-ignore
        if(a.time?.final < b.time?.final){
          return -1;
        //@ts-ignore
        }else if(a.time?.final > b.time?.final){
          return 1;
        }else{
          return 0
        }
      }
    );
  }

  private recalcPoints() {
    console.log(this.raceCategory.category.name);
    let prev: Result | undefined = undefined;
    let i = 0;
    let realCount = 0;
    //@ts-ignore
    while (realCount < this.results.length) {
      //@ts-ignore
      let result = this.results[realCount];
      console.log(realCount);
      result.position = i + 1;
      if (prev && result.time?.final != undefined) {
        if (prev.time?.final === result.time?.final){
          result.points = prev.points;
          result.position = prev.position;
          prev = result;
          realCount++;
          continue;
        }
      }

      
      
      if(result.time?.final === 0){
        result.points = 0;
      }else{
        //@ts-ignore
        result.points = this.raceCategory?.category?.points[i];
      }

      prev = result;
      i++;
      realCount++;
    }
  }
}
