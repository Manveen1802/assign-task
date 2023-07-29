import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';

 export const adminRoutes: Routes = [{

  path: '',
  children: [
    {
      path:'',
      redirectTo:'auth/login',
      pathMatch:'full'
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'configuration',
      component:ConfigurationComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
