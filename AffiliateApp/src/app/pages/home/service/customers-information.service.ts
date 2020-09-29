import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { CustomersInformationModel } from "../models/customers-information.model";

@Injectable({
    providedIn: "root",
  })
  export class CustomersInformationService extends BaseApiService<
  CustomersInformationModel
  > {
    [x: string]: any;
    constructor(public http: HttpClient) {
      super(http, "api/SurgerySubService/customer");
    }
    // getListNotifications(){
    //     return this.http.get('api/notification?category=null&type=null').pipe(map((result: any) => result.Payload));
    // }
    getCustomersInformation(CustomerId: number){
      return this.http.get(`api/SurgerySubService/customer/${CustomerId}`).pipe(map((result: any) => result.Payload));
    }
    getInformation(CustomerId: number){
      return this.http.get(`api/customer/affiliated/${CustomerId}`).pipe(map((result: any) => result.Payload));
    }
  }
  