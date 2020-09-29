import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NotificationsService } from '../../../home/service/notifications.service';
import { HomeService } from '../../../home/service/home.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  notiDetail: any;
  notiId: number;
  name: string;
  timeString: string;
  dateString: string;
  imageURL: string;
  description: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public notificationService: NotificationsService,
    public homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.notiId = +param.get('notificationId'));
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
      
      }
    });
 }

 backClicked() {
  this.homeService.backClicked();
}


}
