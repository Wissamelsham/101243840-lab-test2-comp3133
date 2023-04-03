import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) {}

  public getLaunch(flightNumber: number) {
    return this.http.get(`${this.baseUrl}/launches/${flightNumber}`);
  }
}
