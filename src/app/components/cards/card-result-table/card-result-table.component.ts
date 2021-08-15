import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultService } from 'src/app/services/result.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-card-result-table',
  templateUrl: './card-result-table.component.html',
  styleUrls: ['./card-result-table.component.scss']
})
export class CardResultTableComponent implements OnInit {

  public results: Result[] = [];

  constructor(private readonly resultService: ResultService, private readonly socketService: SocketService) { 
    this.socketService.on("new-result", (result: Result) => {
      this.results.push(result);
    });

    this.socketService.on("update-result", (result: Result) => {
      console.log("Update je tu");
      let found = this.results.filter(value => value.id === result.id);
      if(found[0]){
        this.update(found[0], result);
      }
    });

    this.socketService.on("delete-result", (result: Result) => {
      let found = this.results.filter(value => value.id === result.id);
      if(found[0]){
        this.delete(result);
      }
    });
  }

  private delete(result: Result){
    this.results.splice(this.results.indexOf(result), 1);
  }

  private update(old: Result, update: Result){
    old.race = update.race;
    old.team = update.team;
    old.time = update.time;
    old.date = update.date;
    old.media = update.media;
  }

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
