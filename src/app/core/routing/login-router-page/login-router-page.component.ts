import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-router-page',
  templateUrl: './login-router-page.component.html'
})
export class LoginRouterPageComponent {

  constructor(private router: Router, private _cookieService: CookieService) {

  }

  public login() {
    this._cookieService.set('token', 'has token');
    this.router.navigateByUrl('/account?username=Chamith');
  }
}
