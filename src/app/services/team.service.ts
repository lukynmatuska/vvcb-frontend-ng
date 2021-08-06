import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Team } from '../types/team';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamFormSource = new Subject<Team>();
  
  public teamFormAsObservable(){
    return this.teamFormSource.asObservable();
  }

  public registerTeamForm(team: Team){
    this.teamFormSource.next(team);
  }

  constructor(private readonly httpClient: HttpClient) { }

  public getTeams(): Observable<Team[]>{
    return this.httpClient.get(`${environment.backend.api}/team`).pipe(
      map(
        (res: any) => {
          return res.map(
            (team: any) => <Team>team
          );
        }
      )
    );
  }

  public createTeam(data: any): Observable<Team>{
    return this.httpClient.post(`${environment.backend.api}/team`, data).pipe(
      map(
        (res: any) => {
          return <Team>res;
        }
      )
    );
  }
}
