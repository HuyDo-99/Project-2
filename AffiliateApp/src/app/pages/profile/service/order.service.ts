import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { DetailsOrder } from "../models/order.model";

@Injectable({
    providedIn: "root",
})
export class OrderService extends BaseApiService<DetailsOrder> {
    constructor(public http: HttpClient) {
        super(http, "api/Contract/CustomerUsername");
    }
    // getDetailsOrder(customerId) {
    //     return this.http.get(`api/SurgerySubService/customer/${customerId}`).pipe(map((result: any) => result.Payload));
    // }
}
