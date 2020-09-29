import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { NotificationsService} from "../../service/notifications.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
})
export class NotificationsComponent implements OnInit {
  constructor(
    private backToPrevious: HomeService,
    public notificationsService: NotificationsService
    ) {}

  listNoti: any;

  ngOnInit(): void {
    this.getListNotifications()
  }
  
  backClicked() {
    this.backToPrevious.backClicked();
  }
  getListNotifications(){
    this.notificationsService.getListNotifications().subscribe(res => {
    this.listNoti = res.filter(x => x.Type == 3 || x.Type == 4 || x.Type == 5 || x.Type == 6);
    console.log(this.listNoti);     
    })
  }
  
}
