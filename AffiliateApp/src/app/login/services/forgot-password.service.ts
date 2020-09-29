import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from '../../shared/services/base.service';
import { map } from "rxjs/operators";
import { AccountRegisterModel } from '../models/account-register.model';

@Injectable({
    providedIn: "root",
})
export class ForgotPasswordService  {
    constructor(public http: HttpClient) {
       
    }
    forgotpassword(email: string, data: any) {
        return this.http.post(`api/account/ForgotPassword?email=${email}`, data);
    }
}
