import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { IntroducedCustomersModel } from "../models/introduced-customers.model";

@Injectable({
    providedIn: "root",
  })
  export class IntroducedCustomersServices extends BaseApiService<IntroducedCustomersModel> {
    constructor(public http: HttpClient) {
      super(http, "api/Affiliation/customerUsername");
    }
    getIntroducedCustomers(){
        return this.http.get('api/Affiliation/customerUsername').pipe(map((result: any) => result.Payload));
    }
  }
  