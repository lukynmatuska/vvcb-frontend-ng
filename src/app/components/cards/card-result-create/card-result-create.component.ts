import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardResultCreateService } from 'src/app/services/card-result-create.service';
import { TeamService } from 'src/app/services/team.service';
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
  constructor(private readonly cardResultCreateService: CardResultCreateService, private readonly teamService: TeamService) {
    this.cardResultCreateService.resultTemplateAsObservable().subscribe(
      (resultTemplate) => {
        this.resultTemplate = resultTemplate;
        this.setupForm();
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
  
  public close(){
    this.resultTemplate = undefined;
  }
  
  public setupForm(){
    let final = this.resultTemplate?.time?.final;
    if(!final && this.resultTemplate?.time?.left && this.resultTemplate?.time?.right){
      final = Math.max(this.resultTemplate.time.left, this.resultTemplate.time.right);
    }
    this.form = new FormGroup({
      time: new FormGroup({
        left: new FormControl(this.resultTemplate?.time?.left, [Validators.required]),
        right: new FormControl(this.resultTemplate?.time?.right, [Validators.required]),
        final: new FormControl(final)
      }),
      team: new FormControl()
    });
  }
}
