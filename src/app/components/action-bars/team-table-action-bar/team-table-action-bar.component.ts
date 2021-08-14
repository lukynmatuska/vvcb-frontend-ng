import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-team-table-action-bar',
  templateUrl: './team-table-action-bar.component.html',
  styleUrls: ['./team-table-action-bar.component.scss']
})
export class TeamTableActionBarComponent implements OnInit {

  @Input("team") team: Team = {};

  constructor(private readonly teamService: TeamService) { }

  ngOnInit(): void {
  }

  public delete() {
    if (this.team?.id) {
      this.teamService.delete(this.team.id).subscribe(
        () => {
          this.teamService.deleteTeam(this.team);
        }
      )
    }
  }

  public edit() {
    console.log("edit team")
  }

}
