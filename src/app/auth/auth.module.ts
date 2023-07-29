import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutes, AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    RouterModule.forChild(AuthRoutes),
    InputTextModule,
    ButtonModule


  ],
  exports: [RouterModule]
})
export class AuthModule { }
