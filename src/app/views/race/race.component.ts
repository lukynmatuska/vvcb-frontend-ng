import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Moment } from 'moment';
import { RaceService } from 'src/app/services/race.service';
import { ResultService } from 'src/app/services/result.service';
import { Race } from 'src/app/types/race';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  public race?: Race;
  // public moment: Moment = moment();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly raceService: RaceService,
    private readonly resultService: ResultService,
    private readonly router: Router
  ) {
    activatedRoute.params.subscribe(params => {
      let raceId = params["id"];
      if (raceId) {
        this.raceService.getRaceById(raceId).subscribe(
          race => {
            this.race = race;
          },
          error => {
            router.navigate(["/"]);
          }
        )
      }
    })
  }

  ngOnInit(): void {
  }

}
