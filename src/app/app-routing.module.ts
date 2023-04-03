import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

const routes: Routes = [
  // { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: '', component: MissionlistComponent },
  { path: 'filter', component: MissionfilterComponent },
  { path: 'missions', component: MissionlistComponent },
  { path: 'missiondetails/:flight_number', component: MissionDetailsComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
