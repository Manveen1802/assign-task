import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './layouts/auth/auth-layout/auth-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token/token.interceptor';
import { ErrorInterceptor } from './auth/error/error.interceptor';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SidebarComponent,
    AdminLayoutComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NavbarModule,
  ],
  providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: TokenInterceptor,
  //     multi: true
  // },
  // {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: ErrorInterceptor,
  //     multi: true
  // },
  // DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
