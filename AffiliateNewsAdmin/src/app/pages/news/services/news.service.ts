import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { NewsModel } from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class NewsService extends BaseApiService<NewsModel> {
    constructor(public http: HttpClient) {
        super(http, 'api/notification');
    }

    getNewsList(): Observable<any> {
        return this.http.get('api/notification?category=null&type=null').pipe(map((ressult: any) => ressult.Payload));
    }

    getNewsDetail(notificationId: number): Observable<any> {
        return this.http.get(`api/notification/detail/${notificationId}`).pipe(map((ressult: any) => ressult.Payload));
    }

}
