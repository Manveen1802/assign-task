import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userName: Subject<String> = new Subject<String>();
  private role: Subject<String> = new Subject<String>();
  constructor(private router: Router, private authApiService: AuthApiService) {
  }
  password: string | undefined;

  isAuthenticated() {
    return !!sessionStorage.getItem('token');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  addToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  storeUserInfo(model: any) {
    //sessionStorage.setItem("name", model.name);
    sessionStorage.setItem("userRole", model.role);
    sessionStorage.setItem("email", model.email);
    sessionStorage.setItem("name", model.name);
    sessionStorage.setItem("_id", model._id);

    this.userName.next(model.name);
    this.role.next(model.userRole);
    if (model.role == "ADMIN") {
      this.router.navigate(['/admin/students'])
    }
    else if (model.role) {
      this.router.navigate(['/admin/profile'])
    }

  }

  getUserEmail() {
    return sessionStorage.getItem("email");
  }

  getUserName(): Observable<any> {
    return this.userName.asObservable();
  }

  getActionRoles() {
    return sessionStorage.getItem("actionRoles");
  }

  getUserRole(): Observable<any> {
    return this.role.asObservable();
  }

  getUserRoleFromSession() {
    return sessionStorage.getItem("role");
  }

 async logout() {
    const token = this.getToken();
    await this.authApiService.logout().subscribe((res:any) => {
 

      if (res.status == 200) {
        sessionStorage.clear();
        localStorage.removeItem("refreshtoken");
        this.router.navigate(["/"]);
      }
    });
    // const token = this.getToken();
    // await this.authApiService.logout({
    //   token
    // }).subscribe((res) => {
    //   if (res.status == 200) {
    //     sessionStorage.clear();
    //     localStorage.removeItem("refreshToken");
    //     this.router.navigate(["/"]);
    //   }
    // });
  }

  getRefreshToken() {
    return sessionStorage.getItem("refreshToken") || localStorage.getItem("refreshToken");
  }

  setRefreshToken(token: string, remeberToken: boolean) {
    sessionStorage.setItem("refreshToken", token);
    if (remeberToken)
      localStorage.setItem("refreshToken", token);
  }

  // checkIfTemporaryPassword(isTempPwd) {
  //   if (isTempPwd) {
  //     this.router.navigate(['/auth/create-password']);
  //   }
  //   else {
  //     if (this.getUserRoleFromSession() == "ADMIN")
  //       this.router.navigate(["/admin/dashboard"]);
  //     else if (this.getUserRoleFromSession())
  //       this.router.navigate(["/admin/dashboard"]);
  //     else
  //       this.router.navigate(["/auth/login"]);
  //   }
  // }
}
