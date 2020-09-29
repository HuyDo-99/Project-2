import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "../../../shared/services/base.service";
import { map } from "rxjs/operators";
import { CategoryModel } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class CategoryService extends BaseApiService<CategoryModel> {
    constructor(public http: HttpClient) {
        super(http, "api/category");
    }
}
