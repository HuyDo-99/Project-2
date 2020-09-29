import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//service
import { NotiService } from "../../../services/noti.service";
import { AlertService } from "../../../../../shared/services/alert.service";
//models
import { NotiModel } from "../../../models/noti.model";


@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.scss']
})
export class DetailNotificationComponent implements OnInit {

  constructor(
    public notiService: NotiService,
    public dialogRef: MatDialogRef<DetailNotificationComponent>,
    public alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  title: string;
  description: string;
  imageNotiString: any;
  ngOnInit(): void {  
    this.title = this.data.notiDetail.Name;  
    this.imageNotiString = this.data.notiDetail.ImageUrl;
    this.description = this.data.notiDetail.Description;
  }

  processFileNotiImage(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imageNotiString = reader.result;
    };
  }

  editNoti(){
    let data = new NotiModel();
    data.Name = this.title;
    data.CategoryId = this.data.notiDetail.CategoryId;
    data.Description = this.description;
    data.ImageUrl = this.imageNotiString.split(",")[1];
    this.notiService.update(data, this.data.notiDetail.NotificationId).subscribe(res =>{
      console.log(res);
      console.log(data);
      this.alertService.changeMessage({
        text: 'Cập nhật thông báo thành công',
        color: 'green'
      });
      this.closeDialog();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


}
