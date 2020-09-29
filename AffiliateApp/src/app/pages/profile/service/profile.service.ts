import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";
import { ProfileModel } from "../models/profile.model";

@Injectable({
  providedIn: "root",
})
export class ProfileService extends BaseApiService<ProfileModel> {
  public httpOptions;

  constructor(public http: HttpClient) {
    super(http, "https://api.bemesoft.com/");

    const token = localStorage.getItem("access_token");
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + token,
      }),
    };
  }

  getProfileCustomer(): Observable<any> {
    return this.http
      .get<any>(`api/customer/detail/username`, this.httpOptions)
      .pipe(map((res: any) => res.Payload));
  }

  updateProfileCustomer(data: any): Observable<any> {
    return this.http.put<any>(
      `api/customer/customerUsername`,
      data,
      this.httpOptions
    );
  }
  getDetailsOrder(customerId) {
    return this.http.get(`api/SurgerySubService/customer/${customerId}`).pipe(map((result: any) => result.Payload));
}

}
