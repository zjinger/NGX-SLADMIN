import { Injectable, Injector, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ReuseTabNotify, ReuseTabCached } from '../models/reuse-tab';
import { Observable, BehaviorSubject } from 'rxjs';
import { MenuService } from './menu.service';

@Injectable(
  { providedIn: 'root' }
)
export class ReuseTabService implements OnDestroy {
  private _max = 10;
  private removeUrlBuffer: string;
  private _excludes: RegExp[] = [];
  private _cachedChange: BehaviorSubject<ReuseTabNotify> = new BehaviorSubject<ReuseTabNotify>(null);
  private _cached: ReuseTabCached[] = [];
  private _titleCached: { [url: string]: string } = {};
  constructor(
    private injector: Injector,
    private menuService: MenuService
  ) { }
  /**
   * 获取当前路由地址
   */

  get currentURL() {
    return this.getUrl(this.injector.get(ActivatedRoute).snapshot);
  }
  /** 
   * 允许最多复用多少个页面，取值范围 `2-100` 
   */
  set max(value: number) {
    this._max = Math.min(Math.max(value, 2), 100);
    for (let i = this._cached.length; i > this._max; i--) {
      this._cached.pop();
    }
  }

  /** 排除规则，限 `mode=URL` */
  set excludes(values: RegExp[]) {
    if (!values) return;
    this._excludes = values;
  }
  get excludes() {
    return this._excludes;
  }
  /**
   * 订阅缓存变更通知
   */
  get change(): Observable<ReuseTabNotify> {
    return this._cachedChange.asObservable();
  }
  /** 获取当前缓存的路由总数 */
  get count() {
    return this._cached.length;
  }
  /** 获取已缓存的路由 */
  get items(): ReuseTabCached[] {
    return this._cached;
  }
  /**
   * 存储
   * @param _snapshot 
   * @param _handle 
   */
  store(_snapshot: ActivatedRouteSnapshot, _handle: any) {
    debugger;
    if (this.count >= this._max) this._cached.shift();
    const url = this.getUrl(_snapshot);
    const idx = this.index(url);
    const item: ReuseTabCached = {
      title: this.getTitle(url, _snapshot),
      closable: true,
      url,
      _snapshot,
      _handle,
    };
    if (idx === -1) {
      this._cached.push(item);
    } else {
      this._cached[idx] = item;
    }

    this.removeUrlBuffer = null;

    if (_handle && _handle.componentRef) {
      this.runHook('_onReuseDestroy', url, _handle.componentRef);
    }
    this._cachedChange.next({ active: 'add', item, list: this._cached });

  }
  /** 获取指定路径缓存 */
  get(url: string): ReuseTabCached {
    return url ? this._cached.find(w => w.url === url) || null : null;
  }
  /**
   * 获取closable 状态
   * @param url 
   * @param _snapshot 
   */
  getClosable(url: string, _snapshot: ActivatedRouteSnapshot): any {
    throw new Error("Method not implemented.");
  }

  /** 自定义当前标题 */
  set title(value: string) {
    const url = this.currentURL;
    this._titleCached[url] = value;
    console.log('update current tag title: ' + value);
    this._cachedChange.next({
      active: 'title',
      title: value,
      list: this._cached,
    });
  }
  /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
  index(url: string): number {
    return this._cached.findIndex(w => w.url === url);
  }
  /**
   * 根据快照获取URL地址
   */
  getUrl(route: ActivatedRouteSnapshot): string {
    let next = this.getTruthRoute(route);
    const segments = [];
    while (next) {
      segments.push(next.url.join('/'));
      next = next.parent;
    }
    const url =
      '/' +
      segments
        .filter(i => i)
        .reverse()
        .join('/');
    return url;
  }
  getTruthRoute(route: ActivatedRouteSnapshot) {
    let next = route;
    while (next.firstChild) next = next.firstChild;
    return next;
  }

  /**
   * 获取标题
   * @param url 
   * @param route 
   */
  getTitle(url: string, route?: ActivatedRouteSnapshot): string {
    if (this._titleCached[url]) return this._titleCached[url];

    if (route && route.data && route.data.title)
      return route.data.title;

    const menu = this.getMenu(url);
    return menu ? menu.title : url;
  }

  /**
   * 决定是否允许路由复用，若 `true` 会触发 `store`
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    return this.can(route);
  }

  /**
   * 决定是否允许应用缓存数据
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = !!(data && data._handle);
    if (ret && data._handle.componentRef) {
      this.runHook('_onReuseInit', url, data._handle.componentRef);
    }
    return ret;
  }
  /**
   * 提取复用数据 
   */
  retrieve(route: ActivatedRouteSnapshot): {} {
    if (this.hasInValidRoute(route)) return null;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = (data && data._handle) || null;
    return ret;
  }

  /**
   * 决定是否应该进行复用路由处理
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let ret = future.routeConfig === curr.routeConfig;
    if (!ret) return false;
    const path = ((future.routeConfig && future.routeConfig.path) ||
      '') as string;
    if (path.length > 0 && ~path.indexOf(':')) {
      const futureUrl = this.getUrl(future);
      const currUrl = this.getUrl(curr);
      ret = futureUrl === currUrl;
    }
    return ret;
  }
  /**
   * 检查快照是否允许被复用
   */
  can(route: ActivatedRouteSnapshot): boolean {
    const url = this.getUrl(route);
    if (url === this.removeUrlBuffer) return false;
    if (route.data && typeof route.data.reuse === 'boolean')
      return route.data.reuse;
    // if (this.mode !== ReuseTabMatchMode.URL) {
    const menu = this.getMenu(url);
    if (!menu) return false;
    // if (this.mode === ReuseTabMatchMode.Menu) {
    //   if (menu.reuse === false) return false;
    // } else {
    //   if (!menu.reuse || menu.reuse !== true) return false;
    // }
    return true;
    // }
    // return this._excludes.findIndex(r => r.test(url)) === -1;
  }
  /**
   * 根据URL移除标签
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  close(url: string, includeNonCloseable = false) {
    this.removeUrlBuffer = url;

    this.remove(url, includeNonCloseable);

    this._cachedChange.next({ active: 'close', url, list: this._cached });
    // this.di('close tag', url);
    return true;
  }
  /**
   * 清除右边
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  closeRight(url: string, includeNonCloseable = false) {
    const start = this.index(url);
    for (let i = this.count - 1; i > start; i--) {
      this.remove(i, includeNonCloseable);
    }

    this.removeUrlBuffer = null;

    this._cachedChange.next({ active: 'closeRight', url, list: this._cached });

    // this.di('close right tages', url);
    return true;
  }
  /**
   * 移除标签
   * @param url 
   * @param includeNonCloseable 
   */
  private remove(url: string | number, includeNonCloseable: boolean): boolean {
    const idx = typeof url === 'string' ? this.index(url) : url;
    const item = idx !== -1 ? this._cached[idx] : null;
    if (!item || (!includeNonCloseable && !item.closable)) return false;

    this.destroy(item._handle);

    this._cached.splice(idx, 1);
    delete this._titleCached[url];
    return true;
  }
  /**
  * 清除所有缓存
  *
  * @param [includeNonCloseable=false] 是否强制包含不可关闭
  */
  clear(includeNonCloseable = false) {
    this._cached.forEach(w => {
      if (!includeNonCloseable && w.closable) this.destroy(w._handle);
    });
    this._cached = this._cached.filter(
      w => !includeNonCloseable && !w.closable,
    );

    this.removeUrlBuffer = null;

    this._cachedChange.next({ active: 'clear', list: this._cached });

    // this.di('clear all catch');
  }
  getMenu(url: string) {
    const menus = this.menuService ? this.menuService.getPathByUrl(url) : [];
    if (!menus || menus.length === 0) return null;
    return menus.pop();
  }
  private hasInValidRoute(route: ActivatedRouteSnapshot) {
    return (
      !route.routeConfig ||
      route.routeConfig.loadChildren ||
      route.routeConfig.children
    );
  }
  private runHook(method: string, url: string, comp: any) {
    if (comp.instance && typeof comp.instance[method] === 'function')
      comp.instance[method]();
  }
  private destroy(_handle: any) {
    if (_handle && _handle.componentRef && _handle.componentRef.destroy)
      _handle.componentRef.destroy();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._cached = [];
    this._cachedChange.unsubscribe();
  }
}
