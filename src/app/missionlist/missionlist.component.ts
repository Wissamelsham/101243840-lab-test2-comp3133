import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  displayedColumns: string[] = ['mission_name', 'launch_year', 'details', 'mission_patch'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(
      (data: any[]) => {
        this.missions = data;
      }
    );
  }
}




