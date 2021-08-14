import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/types/result';

@Component({
  selector: 'app-card-result-table-race',
  templateUrl: './card-result-table-race.component.html',
  styleUrls: ['./card-result-table-race.component.scss']
})
export class CardResultTableRaceComponent implements OnInit {

  @Input("title")
  public title: String = "Titulek";
  @Input("results")
  public results?: Result[];

  constructor() { }

  ngOnInit(): void {
  }

}
