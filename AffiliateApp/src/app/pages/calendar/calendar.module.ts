import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CreateCalenderComponent } from './components/create-calender/create-calender.component';
import { PickTimeComponent } from './components/pick-time/pick-time.component';
import { OperationScheduleComponent } from './components/operation-schedule/operation-schedule.component';


@NgModule({
  declarations: [CalendarComponent, CreateCalenderComponent, PickTimeComponent, OperationScheduleComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ]
})
export class CalendarModule { }
