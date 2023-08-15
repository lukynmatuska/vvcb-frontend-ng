import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Race } from '../types/race';

export class RaceService {

  constructor(private readonly httpClient: HttpClient) { }

  public getRaces(): Observable<Race[]> {
    return this.httpClient.get(`${environment.backend.api}/race`).pipe(
      map(
        (res: any) => {
          return res.map(
            (race: any) => <Race>race
          );
        }
      )
    );
  }

  public getRaceById(id: String): Observable<Race> {
    return this.httpClient.get(`${environment.backend.api}/race/${id}`).pipe(
      map(
        (res: any) => {
          return <Race>res;
        }
      )
    );
  }
}
