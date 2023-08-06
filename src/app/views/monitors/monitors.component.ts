import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';
import { Race } from 'src/app/types/race';
import { SimpleResultResponse } from 'src/app/types/simple-results-response';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {

  public race: Race = { id: "exmaple" };
  public simpleResultsResponse: SimpleResultResponse = {};

  constructor(
    private readonly monitorService: MonitorService
  ) { }

  ngOnInit(): void {
    this.monitorService.getSimpleResults().subscribe(
      (res) => {
        console.log(res);
        this.simpleResultsResponse = res;
        Object.entries(res).forEach(([key, value]) => console.log(`${key}: ${value}`));
      }
    )
  }
}
