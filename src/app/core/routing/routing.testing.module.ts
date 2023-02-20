import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { HasAuthorization } from './has-authorization.service';
import { Child2RouterPageComponent } from './child2-router-page/child2-router-page.component';
import { AccountRouterPageComponent } from './account-router-page/account-router-page.component';
import { LoginRouterPageComponent } from './login-router-page/login-router-page.component';
import { MyInfoComponent } from './inner-account-routes/my-info/my-info.component';
import { ChangePasswordComponent } from './inner-account-routes/change-password/change-password.component';

@NgModule({
  declarations: [
    // ParentRouterPageComponent,
    Child2RouterPageComponent,
    AccountRouterPageComponent,
    LoginRouterPageComponent,
    MyInfoComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class RouterTestingModule { }