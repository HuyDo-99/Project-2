import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseApiService } from "src/app/shared/services/base.service";
import { ProfileModel } from "../models/profile.model";

@Injectable({
    providedIn: "root",
})
export class ChangePasswordService extends BaseApiService<ProfileModel> {
    public httpOptions;

    constructor(public http: HttpClient) {
        super(http, 'api/account/changepassword');
    }

}
