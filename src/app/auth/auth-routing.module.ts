import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CommonModule } from '@angular/common';

 export const AuthRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}
// {
//   path: 'f',
//   component: SignupComponent
// },
 ]


@NgModule({
  declarations:[],
  imports: [CommonModule],

})
export class AuthRoutingModule { }
