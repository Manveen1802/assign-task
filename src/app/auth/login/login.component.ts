import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit() { }
  login(){
    this.route.navigate(['admin/dashboard'])
  }
  goToForgot() {
    // this.route.navigate(['/auth/forgot-password'])
    this.route.navigateByUrl("/auth/forgot-password")
  }

}
