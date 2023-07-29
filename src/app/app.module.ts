import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './layouts/auth/auth-layout/auth-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SidebarComponent,
    AdminLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
