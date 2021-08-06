import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-action-bar',
  templateUrl: './team-action-bar.component.html',
  styleUrls: ['./team-action-bar.component.scss']
})
export class TeamActionBarComponent implements OnInit {

  constructor(private readonly teamService: TeamService) { }

  ngOnInit(): void {
  }

  public add(){
    this.teamService.registerTeamForm({});
  }
}
