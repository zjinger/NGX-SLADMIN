import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';
import { tap, map } from 'rxjs/operators';
import { TabComponent } from '../models';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private menuUrl = 'api/menus';

  menuItems = new BehaviorSubject<any[]>([]);
  private data: any[] = [];
  protected _currentMenuItem = {};

  constructor(private _router: Router, private http: HttpClient) { }

  public updateMenuByRoutes(routes: Routes) {
    let items = _.cloneDeep(routes);
    this.menuItems.next(items);
  }

  getMenus(): Observable<TabComponent[]> {
    return this.http.get<TabComponent[]>(this.menuUrl);
  }

  /**
  * 根据url获取菜单列表
  * @param url
  */
  getPathByUrl(url: string): any[] {
    let item: any = null;
    this.visit((i, parent, depth) => {
      if (i.link === url) {
        item = i;
      }
    });

    const ret: any[] = [];
    if (!item) return ret;

    do {
      ret.splice(0, 0, item);
      item = item.__parent;
    } while (item);

    return ret;
  }

  visit(callback: (item: any, parentMenum: any, depth?: number) => void) {
    const inFn = (list: any[], parentMenu: any, depth: number) => {
      for (const item of list) {
        callback(item, parentMenu, depth);
        if (item.children && item.children.length > 0) {
          inFn(item.children, item, depth + 1);
        } else {
          item.children = [];
        }
      }
    };

    inFn(this.data, null, 0);
  }

}
