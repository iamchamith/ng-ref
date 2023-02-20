import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PaginModal } from "./pagin.model";
import { catchError, throwError } from "rxjs";
import { CookieService } from "ngx-cookie-service";
@Injectable({
    providedIn: 'root',
})
export class RepositoryService {
    private httpOptions: any = {};
    constructor(private readonly _httpClient: HttpClient, private _cookieService: CookieService) {
    }
    public create<TIn, TOut>(route: string, item: TIn, authorization: boolean = true) {
        return this._httpClient.post<TOut>(route, item, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }
    public update<TIn, TOut>(route: string, item: TIn, authorization: boolean = true) {
        return this._httpClient.put<TOut>(route, item, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }
    public delete(route: string, itemId: string, authorization: boolean = true) {
        route = `${route}\\${itemId}`;
        return this._httpClient.delete(route, this.getHeaders(authorization))
            .pipe(catchError(this.handleError));
    }
    public getById<TOut>(route: string, itemId: string, authorization: boolean = true) {
        route = `${route}\\${itemId}`;
        return this._httpClient.get<TOut>(route, this.getHeaders(authorization))
    }
    public get<TOut>(route: string, pagin: PaginModal, authorization: boolean = true) {
        return this._httpClient.get<TOut>(route, this.getHeaders(authorization))
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