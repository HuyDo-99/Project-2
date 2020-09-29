import { Component, OnInit } from "@angular/core";
import { CalendarService } from "./components/service/calendar.service";
import { CustomerReminderService } from "./services/customer-reminder.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  customerAppointments: any;
  hour: string;
  today: string;
  calendar: any;
  surgery: [];
  customerReminders: any;

  constructor(
    private calendarService: CalendarService,
    public customerReminderService: CustomerReminderService
  ) {}

  ngOnInit(): void {
    var date = new Date();
    var day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    var month = (date.getMonth() < 10 ? "0" : "") + (date.getMonth() + 1);
    var year = (date.getFullYear() < 10 ? "0" : "") + date.getFullYear();
    this.today = year + "-" + month + "-" + day;
    console.log("Today", this.today);
    this.getCustomerAppointments();
    this.getCustomerReminder();
  }

  onValueChange(args: any): void {
    var day = (args.value.getDate() < 10 ? "0" : "") + args.value.getDate();
    var month =
      (args.value.getMonth() < 10 ? "0" : "") + (args.value.getMonth() + 1);
    var year =
      (args.value.getFullYear() < 10 ? "0" : "") + args.value.getFullYear();
    this.today = year + "-" + month + "-" + day;
    console.log("Selected Day", this.today);
    console.log(args.value);

    this.getCustomerAppointments();
    this.getCustomerReminder();
  }

  getCustomerReminder() {
    this.customerReminderService
      .getCustomerReminder(this.today, this.today)
      .subscribe((res) => {
        this.customerReminders = res;
        console.log("lich", this.customerReminders);
      });
  }

  getCustomerAppointments() {
    this.calendarService
      .getCustomerAppointments(this.today, this.today)
      .subscribe((data) => {
        console.log(data);
        this.customerAppointments = data;
      });
  }
}
