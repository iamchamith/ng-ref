import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-router-page',
  templateUrl: './account-router-page.component.html'
})
export class AccountRouterPageComponent {

  public userName!: string | null;
  constructor(private router: Router, private _cookieService: CookieService, private route: ActivatedRoute) {
    this.userName = this.route.snapshot.queryParamMap.get('username');
  }
  public logOut() {
    this._cookieService.delete('token');
    this.router.navigate(['/login']);
  }
}
