import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private httpClient: HttpClient) { }

  base_url: string = environment.base_url;
  
  logout() {
    var url = this.base_url + 'auth/logout';
    return this.httpClient.get<any>(url);
  }

}
