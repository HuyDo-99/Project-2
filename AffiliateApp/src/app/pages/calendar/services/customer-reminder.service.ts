import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { CustomerReminderModel } from "../models/customer-reminder.model";

@Injectable({
  providedIn: "root",
})
export class CustomerReminderService extends BaseApiService<
  CustomerReminderModel
> {
  constructor(public http: HttpClient) {
    super(http, "api/customerReminder/customerUsername");
  }

  getCustomerReminder(fromDate: string, toDate: string): Observable<any> {
    return this.http
      .get(
        `api/customerReminder/customerUsername?fromdate=${fromDate}&todate=${toDate}`
      )
      .pipe(map((result: any) => result.Payload));
  }
}
