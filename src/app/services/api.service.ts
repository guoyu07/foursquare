import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {

    }

    get (url: string, urlParams?: HttpParams): Observable<any> {
        return this.http.get(url, {params: urlParams});
    }

    post (url: string, body: Object) {
        return this.http.post(url, body);
    }

    put (url: string, body: Object) {
        return this.http.put(url, body);
    }

}
