import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  public missions: any[] = [];
  public filteredMissions: any[] = [];
  public year: string = '';

  constructor(private http: HttpClient) {
    this.getLaunches();
  }

  private getLaunches() {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches')
      .subscribe((missions: any[]) => {
        this.missions = missions;
        this.filteredMissions = missions;
      });
  }

  public filterByYear() {
    if (this.year !== '') {
      this.http.get<any[]>(`https://api.spacexdata.com/v3/launches?launch_year=${this.year}`)
        .subscribe((missions: any[]) => {
          this.filteredMissions = missions;
        });
    } else {
      this.filteredMissions = this.missions;
    }
  }
}
