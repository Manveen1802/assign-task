import { Component, ViewChild , OnInit} from '@angular/core';

import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import { PerfectScrollbarService } from 'src/app/services/perfectScrollbar.service';
// import { Router, NavigationEnd, NavigationStart } from '@angular/router';
@Component({
    selector: 'app-layout',
    templateUrl: './admin-layout.component.html',
})

export class AdminLayoutComponent {
  }
