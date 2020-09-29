import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BaseApiService } from "src/app/shared/services/base.service";
import { RegisterModel } from "../models/register.model";
@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseApiService<RegisterModel>{

  constructor( public http: HttpClient) {
    super(http, 'api/account/RegisterCustomer')
  }
}
