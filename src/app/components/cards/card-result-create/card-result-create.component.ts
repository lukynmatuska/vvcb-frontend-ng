import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RaceService } from 'src/app/services/race.service';
import { ResultTemplateService } from 'src/app/services/result-template.service';
import { ResultService } from 'src/app/services/result.service';
import { TeamService } from 'src/app/services/team.service';
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
  //@ts-ignore
  public form: FormGroup;

  public teams: Team[] = [];
  public races: Race[] = [];
  constructor(
    private readonly resultTemplateService: ResultTemplateService,
    private readonly teamService: TeamService,
    private readonly raceService: RaceService,
    private readonly resultService: ResultService
  ) {
    this.resultTemplateService.resultTemplateAsObservable().subscribe(
      (resultTemplate) => {
        this.resultTemplate = resultTemplate;
        this.setupForm();
      }
    );
    this.raceService.getRaces().subscribe(
      (races) => {
        this.races = races;
      }
    );

    this.setupForm();
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
  }

  public setupForm() {
    let final = this.resultTemplate?.time?.final;
    if (!final && this.resultTemplate?.time?.left && this.resultTemplate?.time?.right) {
      final = Math.max(this.resultTemplate.time.left, this.resultTemplate.time.right);
    }
    this.form = new FormGroup({
      time: new FormGroup({
        left: new FormControl(this.resultTemplate?.time?.left, [Validators.required]),
        right: new FormControl(this.resultTemplate?.time?.right, [Validators.required]),
        final: new FormControl(final)
      }),
      team: new FormControl(),
      race: new FormControl()
    });
  }

  public create() {
    if (this.form.valid) {
      let form: ResultRequest = this.form.value;
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
          this.close();
        }
      );
    }
  }
}
