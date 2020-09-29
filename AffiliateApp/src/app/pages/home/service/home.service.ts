import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";
@Injectable({
  providedIn: "root",
})
export class HomeService extends BaseApiService<any>{
  public httpOptions;
  constructor(public _location: Location,
    public http: HttpClient
  ) {
    super(http, 'api/customer')
  }

  backClicked() {
    this._location.back();
  }

  getAffiliationCommission(): Observable<any> {
    return this.http.get<any>('api/Affiliationcommission/customerUsername').pipe(map((res: any) => res.Payload));
  }
  getCustomerDetail(): Observable<any> {
    return this.http.get<any>('api/customer/detail/username').pipe(map((res: any) => res.Payload));
  }
  getCustomerHierarchy(affiliatedCustomerId: number){
    return this.http.get(`api/Affiliation/customer/${affiliatedCustomerId}`).pipe(map((res: any) => res.Payload));
  }

  getAccountBalance(): Observable<any> {
    return this.http.get<any>('api/CustomerCommission/customerUsername').pipe(map((res: any) => res.Payload));
  }

  sumIntroducedCustomer(): Observable<any> {
    return this.http.get<any>('api/Affiliation/report/customerUsername').pipe(map((res: any) => res.Payload));
  }
  getRankCustomer(): Observable<any>{
    return this.http.get<any>('api/CustomerRanking/customerUsername').pipe(map((res: any) => res.Payload));
  }

}
