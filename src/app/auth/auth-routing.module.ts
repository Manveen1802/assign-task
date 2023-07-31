import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CommonModule } from '@angular/common';

 export const AuthRoutes: Routes = [{
 
  path: '',
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'create-password',
    component: ChangePasswordComponent
  }]
}]


@NgModule({
  declarations:[],
  imports: [CommonModule],

})
export class AuthRoutingModule { }
