import { Injectable } from '@angular/core';
import { BaseApiService } from "../../../shared/services/base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseApiService<any> {

  constructor(
    public http: HttpClient
  ) {
    super(http, 'api/Affiliation/customerUsername')
  }

  affiliationcommissionReport(year: number): Observable<any> {
    return this.http.get(`api/AffiliationcommissionReport/customerUsername?year=${year}`).pipe(map((result: any) => result.Payload));
  }
}
