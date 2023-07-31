import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService : AuthService,
    private router : Router
    ){}

  canActivate(  next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    // var isAuthenticated = this.authService.isAuthenticated();
    // if (!isAuthenticated) {
    //     this.router.navigate(['auth/login']);
    //     return isAuthenticated;
    // }
    // return this.checkUserLogin(next, state);
    return true
  }

  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
  //   return this.canActivate(next, state);
  // }

  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //     const userRole = this.authService.getUserRoleFromSession();
  //     // if ((url.url == "/admin/dashboard") && userRole != "ADMIN") {
  //     //   this.router.navigate(['/admin/students']);
  //     //   return false;
  //     // }
  //     return true;
  }
  


