import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private params: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly monitorService: MonitorService
  ) {
    activatedRoute.params.subscribe(params => {
      this.params = params;
    })
  }

  private updateResults(): void {
    this.monitorService.getSimpleResults(this.params.url).subscribe(
      (res) => {
        this.simpleResultsResponse = res;
      }
    )
  }

  ngOnInit(): void {
    this.updateResults()
    setInterval(() => {
      this.updateResults()
    }, 60 * 1000); // one minute
  }
}
