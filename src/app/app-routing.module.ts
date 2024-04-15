import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LiveComponent} from './live/live.component';
import {HistoryComponent} from './history/history.component';
import {PointsTableComponent} from './points-table/points-table.component';


const routes: Routes = [
  {path:"home",component: LiveComponent},
  {path:"live",component: LiveComponent},
  {path:"history",component: HistoryComponent},
  {path:"points-table",component: PointsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
