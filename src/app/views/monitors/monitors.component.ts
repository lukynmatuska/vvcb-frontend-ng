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
  public loadingResults: number = 0;
  public errorLoadingResults: number = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly monitorService: MonitorService
  ) {
    activatedRoute.params.subscribe(params => {
      this.params = params;
    })
  }

  private updateResults(): void {
    this.errorLoadingResults--;
    this.loadingResults++;
    this.monitorService.getSimpleResults(this.params.url).subscribe(
      (res): void => {
        this.simpleResultsResponse = res;
        this.loadingResults--;
      },
      (error): void => {
        console.error(error);
        this.loadingResults--;
        this.errorLoadingResults = 1;
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
