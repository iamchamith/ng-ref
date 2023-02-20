import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AccountRouterPageComponent } from './account-router-page/account-router-page.component';
import { Child2RouterPageComponent } from './child2-router-page/child2-router-page.component';
import { HasAuthorization } from './has-authorization.service';
import { ChangePasswordComponent } from './inner-account-routes/change-password/change-password.component';
import { MyInfoComponent } from './inner-account-routes/my-info/my-info.component';
import { LoginRouterPageComponent } from './login-router-page/login-router-page.component';

const routes: Routes = [
    { path: 'home', component: Child2RouterPageComponent },
    { path: 'login', component: LoginRouterPageComponent },
    {
        path: 'account', component: AccountRouterPageComponent, canActivate: [HasAuthorization],
        children: [
            {
                path: 'my-info',
                component: MyInfoComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            }
        ]
    },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [HasAuthorization]
})
export class AppRoutingModule { }