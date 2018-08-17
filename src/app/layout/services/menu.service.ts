import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = new BehaviorSubject<any[]>([]);

  protected _currentMenuItem = {};
  
  constructor(private _router: Router) { }
  
  public updateMenuByRoutes(routes: Routes) {
    let items = _.cloneDeep(routes);
    this.menuItems.next(items);
  }

}
