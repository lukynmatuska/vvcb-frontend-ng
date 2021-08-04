import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Team } from '../types/team';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

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
}
