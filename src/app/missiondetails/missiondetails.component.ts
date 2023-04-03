import { Component, Input } from '@angular/core';

import { SpacexApiService } from 'src/network/spacex-api.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent {
  @Input() mission: any;

  constructor(private spacexService: SpacexApiService) {}

  ngOnInit() {
    if (this.mission) {
      this.spacexService.getLaunch(this.mission.flight_number)
        .subscribe((mission: any) => {
          this.mission = mission;
        });
    }
  }
}
