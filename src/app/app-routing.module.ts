import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

import { AuthLayoutComponent } from './layouts/auth/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
},
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],

    children: [
        {
            path: 'admin',
            loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
        }]
}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
    }
    ]
},
  // {
  //   path:'auth',
  //   // canActivate:[AuthGuard],
  //   loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  // },
  // {
  //   path:'admin',
  //   // canActivate:[AuthGuard],
  //   loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  // },
  // {
  //   path:'user',
  //   canActivate:[AuthGuard],
  //   loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  // }

  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
