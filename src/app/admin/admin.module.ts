import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRoutes } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forChild(adminRoutes),

  ],
  exports: [RouterModule]
})
export class AdminModule { }
