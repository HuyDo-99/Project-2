import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable, ObservedValueOf } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { NotificationsModel } from "../../home/models/notifications.model";

@Injectable({
    providedIn: "root",
  })
  export class NotificationsService extends BaseApiService<
  NotificationsModel
  > {
    constructor(public http: HttpClient) {
      super(http, "api/notification?category=null&type=null");
    }
    getListNotifications(){
        return this.http.get('api/notification?category=null&type=null').pipe(map((result: any) => result.Payload));
    }
    getNotificationDetail(id: number){
      return this.http.get(`api/notification/detail/${id}`).pipe(map((result: any) => result.Payload));
    }
  }
  