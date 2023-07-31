import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  product: any;
  constructor(private route: Router) {}
  ngOnInit() {
    
    this.product = [
      {  code: "1", name: "aman",category: "bca", quantity: "2019" },
      {  code: "2",name: "priya", category: "bca", quantity: "2019" },
      {  code: "3", name: "muskan",category: "bca", quantity: "2019" },
      {  code: "4",name: "madhav", category: "bca", quantity: "2019" },
    ]
  
  }
}

