import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../../service/home.service";
import { NotificationsService } from "../../../service/notifications.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-notification-details",
  templateUrl: "./notification-details.component.html",
  styleUrls: ["./notification-details.component.scss"],
})
export class NotificationDetailsComponent implements OnInit {
  constructor(private backToPrevious: HomeService,
              private notificationService: NotificationsService,
              public activatedRoute: ActivatedRoute
    ) {}
  notiDetail: any;
  notiId: number;
  name: string;
  timeString: string;
  dateString: string;
  imageURL: string;
  description: string;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.notiId = +param.get('notiId'));
    this.getNotificationDetail();
  }

  getNotificationDetail(){
     this.notificationService.getNotificationDetail(this.notiId).subscribe(res => {
       if(res != undefined){
       this.notiDetail = res;
       this.name = this.notiDetail.Name;
       this.timeString = this.notiDetail.TimeString;
       this.dateString = this.notiDetail.DateString;
       this.imageURL = this.notiDetail.ImageUrl;
       this.description = this.notiDetail.Description;
       console.log(res);
       }
     });
  }



  backClicked() {
    this.backToPrevious.backClicked();
  }
}
