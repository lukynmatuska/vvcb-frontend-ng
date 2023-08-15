import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from '../types/category';

export class CategoryService {

  constructor(private readonly httpClient: HttpClient) { }

  public getCategories(): Observable<Category[]>{
    return this.httpClient.get(`${environment.backend.api}/category`).pipe(
      map(
        (res: any) => {
          return res.map(
            (category: any) => <Category>category
          );
        }
      )
    );
  }
}
