import { ReuseTabCached, ReuseContextCloseEvent } from './../../../models/reuse-tab';
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input, SimpleChange, ChangeDetectorRef, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { TabComponent } from '../../../models';
import { toNumber, toBoolean } from '../../../../shared/util/convert';
import { ReuseTabService } from '../../../services/reuse-tab.service';
import { ReuseTabNotify } from '../../../models/reuse-tab';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.less']
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
  list: TabComponent[] = [];
  item: TabComponent;
  pos = 0;
  private sub$: Subscription;
  /**tab 最大数量 */
  private _max: number;
  /** 总是显示当前页 */
  private _showCurrent = true;
  @Input()
  get showCurrent() {
    return this._showCurrent;
  }
  set showCurrent(value: any) {
    this._showCurrent = toBoolean(value);
  }

  @Input()
  get max() {
    return this._max;
  }
  set max(value: any) {
    this._max = toNumber(value, null);
  }
  /** 切换时回调 */
  @Output() change: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  /** 关闭回调 */
  @Output() close: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  constructor(
    private reuseService: ReuseTabService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private render: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {

    const route$ = this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
    );
    console.log(route$);
    this.sub$ = combineLatest(this.reuseService.change, route$).subscribe(([res, e]) =>
      this.genList(res as any),
    );
  }

  ngOnInit() {
    this.genList();
  }

  private genList(notify?: ReuseTabNotify) {
    console.log(notify);
    const isClosed = notify && notify.active === 'close';
    const beforeClosePos = isClosed
      ? this.list.findIndex(w => w.url === notify.url)
      : -1;
    const ls = this.reuseService.items.map((item: ReuseTabCached, index: number) => {
      return {
        url: item.url,
        title: item.title,
        closable: true,
        index: index,
        active: false,
        last: false,
      }
    });
    if (this.showCurrent) {
      const snapshot = this.route.snapshot;
      const url: string = this.reuseService.getUrl(snapshot);
      const idx = ls.findIndex(w => w.url === url);
      if (idx !== -1 || (isClosed && notify.url === url)) {
        this.pos = isClosed
          ? idx >= beforeClosePos
            ? this.pos - 1
            : this.pos
          : idx;
      } else {
        const snapshotTrue = this.reuseService.getTruthRoute(snapshot);
        ls.push({
          url,
          title: this.reuseService.getTitle(url, snapshotTrue),
          closable: true,
          index: ls.length,
          active: false,
          last: false,
        });
        this.pos = ls.length - 1;
      }
      if (ls.length <= 1) ls[0].closable = false;
    }
    this.list = ls;

    if (ls.length && isClosed) {
      this.to({ event: null, index: this.pos });
    }

    this.refStatus(false);
    this.visibility();
    this.cd.detectChanges();
  }
  private visibility() {
    if (this.showCurrent) return;
    this.render.setStyle(
      this.el.nativeElement,
      'display',
      this.list.length === 0 ? 'none' : 'block',
    );
  }

  to($event) {
    let index = $event.index;
    let e = $event.event;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    index = Math.max(0, Math.min(index, this.list.length - 1));
    const item = this.list[index];
    this.router.navigateByUrl(item.url).then(res => {
      if (!res) return;
      this.pos = index;
      this.item = item;
      this.refStatus();
      this.change.emit(item);
    });
  }

  refStatus(dc = true) {
    if (this.list.length) {
      this.list[this.list.length - 1].last = true;
      this.list.forEach((i, idx) => (i.active = this.pos === idx));
    }
    if (dc) this.cd.detectChanges();
  }
  cmChange(res: ReuseContextCloseEvent) {
    switch (res.type) {
      case 'close':
        this._close(null, res.item.index, res.includeNonCloseable);
        break;
      case 'closeRight':
        this.reuseService.closeRight(res.item.url, res.includeNonCloseable);
        this.close.emit(null);
        break;
      case 'clear':
      case 'closeOther':
        this.reuseService.clear(res.includeNonCloseable);
        this.close.emit(null);
        break;
    }
  }

  _close(e: Event, idx: number, includeNonCloseable: boolean) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const item = this.list[idx];
    this.reuseService.close(item.url, includeNonCloseable);
    this.close.emit(item);
    this.cd.detectChanges();
    return false;
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges, ): void {
    if (changes.max) this.reuseService.max = this.max;
    // if (changes.excludes) this.reuseService.excludes = this.excludes;
    // if (changes.mode) this.reuseService.mode = this.mode;
    // this.reuseService.debug = this.debug;
    // this.setClass();
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
