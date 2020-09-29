import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { SeminorModel } from "../models/seminor.model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class SeminorService extends BaseApiService<SeminorModel> {
    [x: string]: any;
   
    constructor(public http: HttpClient) {
        super(http, 'api/notification/seminar');
    }

    createSeminor(data : any):Observable<SeminorModel> {
        return this.http.post<SeminorModel>('api/notification', data).pipe(map((ressult: any) => ressult.Payload));
    }
    getSeminorList() {
        return this.http.get('api/notification/seminar').pipe(map((ressult: any) => ressult.Payload));
    }
    getSeminorDetail(seminorId: number): Observable<any> {
        return this.http.get(`api/notification/detail/${seminorId}`).pipe(map((ressult: any) => ressult.Payload));
    }
    updateSeminor( NotificationId: number ,data: any ): Observable<SeminorModel> {
        return this.http.put(`api/notification/${NotificationId}`, data).pipe(map((ressult: any) => ressult.Payload));
    }
    deleteSeminor(NotificationId: number): Observable<any> {
        return this.http.delete(`api/notification/${NotificationId}`).pipe(map((ressult: any) => ressult.Payload));
    }
}

