import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RaceService } from 'src/app/services/race.service';
import { ResultTemplateService } from 'src/app/services/result-template.service';
import { ResultService } from 'src/app/services/result.service';
import { TeamService } from 'src/app/services/team.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { Race } from 'src/app/types/race';
import { Result } from 'src/app/types/result';
import { ResultRequest } from 'src/app/types/result-request';
import { ResultTemplate } from 'src/app/types/result-template';
import { Team } from 'src/app/types/team';


@Component({
  selector: 'app-card-result-create',
  templateUrl: './card-result-create.component.html',
  styleUrls: ['./card-result-create.component.scss']
})
export class CardResultCreateComponent implements OnInit {

  public resultTemplate?: ResultTemplate;
  public result?: Result;
  //@ts-ignore
  public form: FormGroup;

  public teams: Team[] = [];
  public races: Race[] = [];
  constructor(
    private readonly resultTemplateService: ResultTemplateService,
    private readonly teamService: TeamService,
    private readonly raceService: RaceService,
    private readonly resultService: ResultService,
    private readonly socketService: SocketService
  ) {
    this.resultTemplateService.resultTemplateAsObservable().subscribe(
      (resultTemplate) => {
        this.resultTemplate = resultTemplate;
        this.setupForm(resultTemplate);
      }
    );

    this.resultService.resultAsObservable().subscribe(
      (result) => {
        this.result = result;
        this.setupForm(result);
      }
    );

    this.raceService.getRaces().subscribe(
      (races) => {
        this.races = races;
      }
    );

    this.setupForm({});
    this.socketService.on(
      "new-team",
      (team: Team) => {
        this.teams.push(team);
      }
    );

    this.socketService.on(
      "delete-team",
      (team: Team) => {
        let found = this.teams.filter(value => value.id === team.id);
        if (found[0]) {
          this.delete(found[0]);
        }
      }
    )
  }

  private delete(team: Team) {
    this.teams.splice(this.teams.indexOf(team), 1);
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      (teams) => {
        this.teams = teams;
      }
    );
  }

  public close() {
    this.resultTemplate = undefined;
    this.result = undefined;
  }

  public setupForm(result: Result | ResultTemplate) {
    let final = result.time?.final;
    if (!final && result?.time?.left && result?.time?.right) {
      final = Math.max(result.time.left, result.time.right);
    }

    let team: string | undefined = undefined;
    if ("team" in result)
      team = result?.team?.id;

    let race: string | undefined = undefined;
    if ("race" in result)
      race = result?.race?.id;

    this.form = new FormGroup({
      time: new FormGroup({
        left: new FormControl(result.time?.left, [Validators.required]),
        right: new FormControl(result.time?.right, [Validators.required]),
        final: new FormControl(final)
      }),
      team: new FormControl(team),
      race: new FormControl(race ? race : this.getDefaultRace())
    });
  }

  public create() {
    if (this.form.valid) {
      let form: ResultRequest = this.form.value;
      if (this.result) {
        //@ts-ignore
        this.resultService.update(this.result.id, form).subscribe(
          (result) => {
            this.close();
          }
        );
      } else {
        this.resultService.createResult(form).subscribe(
          () => {
            console.log(this.resultTemplate);
            if (this.resultTemplate?.id) {
              this.resultTemplateService.delete(this.resultTemplate.id).subscribe(
                () => {
                  //@ts-ignore
                  this.resultTemplateService.deleteResultTemplate(this.resultTemplate);
                }
              );
            }
            if (form.race)
              this.setDefaultRace(form.race);
            this.close();
          }
        );
      }
    }
  }

  private setDefaultRace(raceId: string) {
    localStorage.setItem("default-race", raceId);
  }

  private getDefaultRace(): string | null {
    return localStorage.getItem("default-race");
  }
}
