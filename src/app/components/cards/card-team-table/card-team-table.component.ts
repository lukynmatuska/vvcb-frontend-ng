import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-card-team-table',
  templateUrl: './card-team-table.component.html',
  styleUrls: ['./card-team-table.component.scss']
})
export class CardTeamTableComponent implements OnInit {

  public teams: Team[] = [];

  constructor(private readonly teamService: TeamService, private readonly socketService: SocketService) {
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

    this.teamService.teamDeleteAsObservable().subscribe(
      (team) => {
        this.teams.splice(this.teams.indexOf(team), 1);
      }
    )
  }

}
