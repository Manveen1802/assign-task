import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfectScrollbarService {

  constructor() { }

  public scrollbar = new BehaviorSubject(false);
}
