import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";


@Injectable()
export class HasAuthorization implements CanActivate {
    constructor(private router: Router, private _cookieService: CookieService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this._cookieService.get('token');
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}