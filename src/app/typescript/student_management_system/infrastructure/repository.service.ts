import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PaginModel } from "./pagin.model";
import { catchError, throwError } from "rxjs";
import { CookieService } from "ngx-cookie-service";
@Injectable({
    providedIn: 'root',
})
export class RepositoryService {
    private httpOptions: any = {};
    constructor(private readonly _httpClient: HttpClient, private _cookieService: CookieService) {
    }
    public create<TIn = any, TOut = any>(route: string, item: TIn, authorization: boolean = true) {
        const url = `${this._cookieService.get('baseurl')}${route}`;
        return this._httpClient.post<TOut>(url, item, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }
    public update<TIn = any, TOut = any>(route: string, item: TIn, authorization: boolean = true) {
        const url = `${this._cookieService.get('baseurl')}${route}`;
        return this._httpClient.put<TOut>(url, item, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }
    public delete(route: string, itemId: string, authorization: boolean = true) {
        route = `${route}/${itemId}`;
        const url = `${this._cookieService.get('baseurl')}${route}`;
        return this._httpClient.delete(url, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }
    public getById<TOut = any>(route: string, itemId: string, authorization: boolean = true) {
        route = `${route}/${itemId}`;
        const url = `${this._cookieService.get('baseurl')}${route}`;
        return this._httpClient.get<TOut>(url, this.getHeaders(authorization))
    }
    public get<TOut = any>(route: string, pagin: PaginModel, authorization: boolean = true) {
        const url = `${this._cookieService.get('baseurl')}${route}`;
        return this._httpClient.get<TOut>(url, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    private getHeaders(authorization: boolean = true): any {
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        if (authorization) {
            headers_object.append("Authorization", `Bearer ${this._cookieService.get('authToken')}`);
        }
        return {
            headers: headers_object
        };
    }
}