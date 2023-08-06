import { Component, Input } from '@angular/core';
import { SimpleResult } from '../types/simple-results-response';

@Component({
  selector: 'app-card-simple-results-table-monitors',
  templateUrl: './card-simple-results-table-monitors.component.html'
})
export class CardSimpleResultsTableMonitorsComponent {

  @Input('categoryName') categoryName: String = "Sněhové vločky";
  @Input('results') results: SimpleResult[] | undefined = [];

}
