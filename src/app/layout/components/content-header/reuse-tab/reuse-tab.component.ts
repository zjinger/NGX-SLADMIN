import { TabService } from './../../../services/tab.service';
import { ReuseTabCached, ReuseContextCloseEvent } from './../../../models/reuse-tab';
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input, SimpleChange, ChangeDetectorRef, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { TabComponent } from '../../../models';
import { toNumber, toBoolean } from '../../../../shared/util/convert';
import { ReuseTabNotify } from '../../../models/reuse-tab';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ReuseTabService } from '../../../services';

@Component({
  selector: 'reuse-tab',
  template: `
  <header-tabset 
    [selectedIndex]="pos" 
    [tabList]="tabList"  
    (tabClick)="to($event)"
    (tabClose)="close($event)"
  >
  </header-tabset>
  <reuse-tab-context (change)="cmChange($event)"></reuse-tab-context>
  `
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
  tabList: TabComponent[] = [];//页面上所有的tab 数组
  tabItem: TabComponent;
  pos = 0;//当前tab 下标
  private sub$: Subscription;//缓存变更通知
  /** 总是显示当前页 */
  private _showCurrent = true;
  @Input()
  get showCurrent() {
    return this._showCurrent;
  }
  set showCurrent(value: any) {
    this._showCurrent = toBoolean(value);
  }
  /** tab切换时回调 */
  @Output() change: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  constructor(
    private reuseService: ReuseTabService,
    private tabService: TabService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private render: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {
    const route$ = this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
    );
    this.sub$ = combineLatest(this.reuseService.change, route$).subscribe(([res, e]) => {
      return this.genList(res as any)
    }
    );
  }

  ngOnInit() {
    this.genList();
  }

  private genList(notify?: ReuseTabNotify) {
    console.log('notify', notify);
    const isClosed = notify && notify.active === 'close';//是否是关闭tab 操作
    const beforeClosePos = isClosed
      ? this.tabList.findIndex(w => w.url === notify.url)
      : -1;
    // console.log('beforeClosePos', beforeClosePos);
    const ls = this.reuseService.reuseTabList.map((item: ReuseTabCached, index: number) => {
      return {
        url: item.url,
        title: item.title,
        closable: item.closable ? true : false,
        index: index,
        active: false,
        last: false,
      };
    });
    // if (ls.findIndex(w => w.url === '/admin/dashboard') == -1) {
    //   ls.unshift({
    //     index: 0,
    //     title: '工作台',
    //     active: false,
    //     closable: false,
    //     url: '/admin/dashboard',
    //     last: false
    //   })
    // }
    // if (this.showCurrent) {
    const snapshot = this.route.snapshot;
    const url = this.reuseService.getUrl(snapshot);
    const idx = ls.findIndex(w => w.url === url);
    // jump directly when the current exists in the list
    // or create a new current item and jump
    if (idx !== -1 || (isClosed && notify.url === url)) {
      this.pos = isClosed
        ? idx >= beforeClosePos
          ? this.pos - 1
          : this.pos
        : idx;
    } else {
      const snapshotTrue = this.reuseService.getTruthRoute(snapshot);
      ls.push({
        url: url,
        title: this.reuseService.getTitle(url, snapshotTrue),
        closable: true,
        index: ls.length,
        active: false,
        last: false,
      });
      this.pos = ls.length - 1;
    }
    // 只剩最后一个tab 时不能关闭
    if (ls.length <= 1) ls[0].closable = false;
    // }
    this.tabList = ls;
    if (ls.length && isClosed) {
      this.to(null, this.pos);
    }
    this.refStatus(false);
    this.visibility();
    this.cd.detectChanges();
    // this.tabService.set(this.tabList);

    // console.log('tabList', this.tabList);
  }

  private visibility() {
    if (this.showCurrent) return;
    this.render.setStyle(
      this.el.nativeElement,
      'display',
      this.tabList.length === 0 ? 'none' : 'block',
    );
  }

  /**
   * 关闭tab
   * @param $event 
   */
  close($event) {
    console.log($event);
    let e = $event.e;
    let index = $event.index;
    //是否有不可关闭的tab，比如工作台、主页
    let includeNonCloseable = $event.closeable;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const item = this.tabList[index];
    this.reuseService.close(item.url, includeNonCloseable);
    this.cd.detectChanges();
    return false;
  }

  /**
   *  跳转
   * @param $event
   * @param index 
   */
  to($event: any, index?) {
    if ($event) {
      let e = $event.e;
      index = $event.index;
      e.preventDefault();
      e.stopPropagation();
    }
    index = Math.max(0, Math.min(index, this.tabList.length - 1));
    const item = this.tabList[index];
    this.router.navigateByUrl(item.url).then(res => {
      if (!res) return;
      this.pos = index;
      this.tabItem = item;
      this.refStatus();
      this.change.emit(item);
    });
  }

  refStatus(dc = true) {
    if (this.tabList.length) {
      this.tabList[this.tabList.length - 1].last = true;
      this.tabList.forEach((i, idx) => (i.active = this.pos === idx));
    }
    if (dc) this.cd.detectChanges();
  }
  cmChange(res: ReuseContextCloseEvent) {
    console.log('cmChange:', res);
    switch (res.type) {
      case 'close':
        this._close(null, res.item.index, res.includeNonCloseable);
        break;
      case 'closeRight':
        this.reuseService.closeRight(res.item.url, res.includeNonCloseable);
        this.close(null);
        break;
      case 'clear':
      case 'closeOther':
        this.reuseService.clear(res.includeNonCloseable);
        this.close(null);
        break;
    }
  }

  _close(e: Event, idx: number, includeNonCloseable: boolean) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const item = this.tabList[idx];
    this.reuseService.close(item.url, includeNonCloseable);
    this.close(item);
    this.cd.detectChanges();
    return false;
  }
  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges, ): void {
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
