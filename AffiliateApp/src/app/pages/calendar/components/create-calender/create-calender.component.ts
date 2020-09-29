import { Component, OnInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatOption } from "@angular/material/core";
import { CalendarService } from "../service/calendar.service";
import { CreateCalendarModel } from "../../models/create-calendar.service";
import { AlertService } from "src/app/shared/services/alert.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-create-calender",
  templateUrl: "./create-calender.component.html",
  styleUrls: ["./create-calender.component.scss"],
})
export class CreateCalenderComponent implements OnInit {
  scheduleType = [
    { type: 1, name: "Phẫu thuật" },
    { type: 2, name: "Khám, tái khám" },
    { type: 3, name: "Thay băng cắt chỉ" },
    { type: 4, name: "Tư vấn" },
  ];
  type: number;
  today: string;
  time: any;
  ScheduleDateTime: string;
  Notes: string;
  IsSos: true;
  Type: number;
  Status: number;
  hour: string;

  constructor(
    private calendarService: CalendarService,
    private alertService: AlertService,
    public router: Router
  ) { }

  ngOnInit(): void {
    var date = new Date();
    var day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    var month = (date.getMonth() < 10 ? "0" : "") + (date.getMonth() + 1);
    var year = (date.getFullYear() < 10 ? "0" : "") + date.getFullYear();
    this.today = year + "-" + month + "-" + day;
    console.log("Today", this.today);
  }

  onValueChange(args: any): void {
    var day = (args.value.getDate() < 10 ? "0" : "") + args.value.getDate();
    var month =
      (args.value.getMonth() < 10 ? "0" : "") + (args.value.getMonth() + 1);
    var year =
      (args.value.getFullYear() < 10 ? "0" : "") + args.value.getFullYear();
    this.today = year + "/" + month + "/" + day;
    console.log("Selected Day", this.today);
  }

  test() {
    console.log(this.hour);
  }

  chooseScheduleType(type: number) {
    this.type = type;
    console.log(this.type);
    
  }

  registerCalendar() {
    let calendarModel = new CreateCalendarModel();
    calendarModel.ScheduleDateTime = this.today + "T" + this.hour;
    calendarModel.IsSos = true;
    calendarModel.Type = this.type;
    console.log(calendarModel);

    this.calendarService.registerCalendar(calendarModel).subscribe((res) => {
      this.alertService.changeMessage({
        text: "Tạo lịch thành công",
        color: "green",
      });

      this.router.navigateByUrl('pages/calendar')

    });
  }
}
