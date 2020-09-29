import { Injectable } from "@angular/core";
import { BaseApiService } from "src/app/shared/services/base.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CalendarService extends BaseApiService<any> {
  constructor(public http: HttpClient) {
    super(http, "https://api.bemesoft.com/");

    const token = localStorage.getItem("access_token");
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + token,
      }),
    };
  }

  getCustomerAppointments(fromDate: string, toDate: string) {
    return this.http
      .get<any>(
        `api/schedule/CustomerUsername?fromDate=${fromDate}&toDate=${toDate}`,
        this.httpOptions
      )
      .pipe(map((res: any) => res.Payload));
  }

  registerCalendar(data: any): Observable<any> {
    return this.http.post<any>(
      `api/schedule/CustomerUsername`,
      data,
      this.httpOptions
    );
  }
}
