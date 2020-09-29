import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
//components
import { DetailNotificationComponent } from "../dialog/detail-notification/detail-notification.component";
//service
import { NotiService } from "../../services/noti.service";



@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private notiService: NotiService
  ) { }
  dataSource: any;
  displayedColumns =[
    'Tiêu đề',
    'Hình ảnh',
    'Nội dung',
    'Tác vụ'
  ];

   notiList: any;
  ngOnInit(): void {
    this.getListNotification();
  }

  getListNotification(){
    this.notiService.getNotiList().subscribe(res => {
       this.notiList = res;
       this.dataSource = new MatTableDataSource(this.notiList);
       this.dataSource.paginator = this.paginator;
       console.log(this.notiList);
    });
  }
  
  openEditForm(id : number) {
    this.dialog.open(DetailNotificationComponent, {
      data: {
        notiDetail: this.notiList.find(x => x.NotificationId ==  id)
      }
    }).afterClosed().subscribe(() => {
      this.getListNotification();
    });
  }

}
