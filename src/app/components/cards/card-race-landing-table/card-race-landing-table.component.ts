import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { RaceService } from 'src/app/services/race.service';
import { Race } from 'src/app/types/race';

@Component({
  selector: 'app-card-race-landing-table',
  templateUrl: './card-race-landing-table.component.html',
  styleUrls: ['./card-race-landing-table.component.scss']
})
export class CardRaceLandingTableComponent implements OnInit {

  public title: string = "Kalendář soutěží";
  public races: Race[] = [];

  constructor(
    private readonly raceService: RaceService
  ) {
    raceService.getRaces().subscribe(races => {
      this.races = races;
    })
  }

  ngOnInit(): void {
  }

  public prettifyDate(date?: Date) {
    moment.locale("cs");
    return moment(date).calendar();
  }

}
