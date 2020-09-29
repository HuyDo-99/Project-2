import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { CreateCalenderComponent } from "./components/create-calender/create-calender.component";
import { PickTimeComponent } from "./components/pick-time/pick-time.component";

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'create-calender',
    component: CreateCalenderComponent
  },
  {
    path: 'pick-time',
    component:  PickTimeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
