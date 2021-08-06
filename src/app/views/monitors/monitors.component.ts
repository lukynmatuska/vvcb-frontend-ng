import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';
import { Race } from 'src/app/types/race';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {

  public race: Race = { id: "exmaple" };

  constructor(
    private readonly monitorService: MonitorService
  ) { }

  ngOnInit(): void {
    this.monitorService.getInitData().subscribe(
      (res) => {
        this.race = <Race>res.race;
      }
    )
  }
}
