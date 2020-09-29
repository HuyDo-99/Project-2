import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { SeminorComponent } from './components/seminor/seminor.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { CreateSeminorComponent } from './components/dialog/create-seminor/create-seminor.component';
import { DetailSeminorComponent } from './components/dialog/detail-seminor/detail-seminor.component';
import { DetailNotificationComponent } from './components/dialog/detail-notification/detail-notification.component';
import { EditSeminorComponent } from './components/dialog/edit-seminor/edit-seminor.component';
import { DeleteSeminorComponent } from './components/dialog/delete-seminor/delete-seminor.component';


@NgModule({
  declarations: [NotificationComponent, SeminorComponent, NotificationListComponent, CreateSeminorComponent, DetailSeminorComponent, DetailNotificationComponent, EditSeminorComponent, DeleteSeminorComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule
  ]
})
export class NotificationModule { }
