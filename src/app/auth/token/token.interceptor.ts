import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private authService:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // if (req.url.includes('refreshtoken')){
    
    //   req = req.clone({
    //     setHeaders: {
    //       'Accept': 'application/json',
    //       'refresh': `${this.authService.getRefreshToken()}`
    //     }
    //   });
    // }
    // else if (!req.url.includes('login')){
      
      
    //   req = req.clone({
        
    //     setHeaders: {
    //       'Accept': 'application/json',
    //       'Authorization': `${this.authService.getToken()}`
    //     }
       
    //   });
    // }
    return next.handle(req)


  }
}
