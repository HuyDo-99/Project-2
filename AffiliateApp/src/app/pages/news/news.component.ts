import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NotificationsService} from "../home/service/notifications.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: any;
  fistNews: any;
  makeupList: any;
  beautyList: any;
  constructor(
    public notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.getNewsList();
  }

  onTabChanged(event: MatTabChangeEvent) {
    if (event.index == 0 || event.index == 1 || event.index == 2) {
      this.getNewsList();
    }
  }

  getNewsList() {
    this.notificationsService.list().subscribe(res => {
      this.newsList = res.filter(x => x.Type == null).reverse();
      this.fistNews = this.newsList[0];
      this.makeupList = this.newsList.filter(item => item.CategoryName === 'Làm đẹp');
      this.beautyList = this.newsList.filter(item => item.CategoryName === 'Thẩm mỹ');
    })
  }

}
