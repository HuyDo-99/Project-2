import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from '../../shared/services/base.service';
import { map } from "rxjs/operators";
import { AccountRegisterModel } from '../models/account-register.model';

@Injectable({
    providedIn: "root",
})
export class AccountRegisterService extends BaseApiService<AccountRegisterModel> {
    constructor(public http: HttpClient) {
        super(http, "api/account/RegisterCustomer");
    }
}
