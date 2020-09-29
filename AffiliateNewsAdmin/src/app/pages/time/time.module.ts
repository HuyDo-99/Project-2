import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';

import { SeminorTimeComponent } from './components/seminor-time/seminor-time.component';
import { CreateTimeComponent } from './components/create-time/create-time.component';


@NgModule({
  declarations: [TimeComponent, SeminorTimeComponent, CreateTimeComponent],
  imports: [
    CommonModule,
    TimeRoutingModule,
    SharedModule
  ]
})
export class TimeModule { }
