import { Component, OnInit, Input, TemplateRef, Inject, Optional, ElementRef, ViewChild, OnDestroy, AfterContentChecked, Output, EventEmitter, Renderer2, QueryList, AfterContentInit, NgZone, ContentChildren } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { UpdateHostClassService } from './../../../../shared/services/update-host-class.service';
import { DOCUMENT } from '@angular/common';
import { isNotNil } from '../../../../shared/util/check';
import { TabLabelDirective } from '../../../directives';
import { fromEvent, merge, of as observableOf, Subscription } from 'rxjs';
import { auditTime, startWith } from 'rxjs/operators';
import { PaneDirective } from '../../../../shared/directives';
export type ScrollDirection = 'after' | 'before';
export class TabChangeEvent {
  index: number;
  tab: any;
}
const EXAGGERATED_OVERSCROLL = 64;
@Component({
  selector: 'header-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less'],
  // host: {
  // '(scroll)': 'onScroll($event)',
  // 'class': 'tabs tabs-top tabs-no-animation tabs-line'
  // },
  providers: [
    UpdateHostClassService
  ]
})
export class TabNavComponent implements OnInit, AfterContentChecked, OnDestroy, AfterContentInit {

  showPaginationControls = false;//是否显示滚动
  disableScrollAfter = true;
  disableScrollBefore = true;
  scrollDistanceChanged: boolean;
  tabLabelCount: number;
  selectedIndexChanged = false;
  realignInkBar: Subscription | null = null;
  private _scrollDistance = 0;
  private _indexToSelect: number = 0;//即将选中的tab index
  private _showPagination = true;
  private _selectedIndex: number = null;//已选择的tab index

  @ContentChildren(TabLabelDirective) listTabLabelDirective: QueryList<TabLabelDirective>;
  
  @ContentChildren(PaneDirective) topLevelPanes: QueryList<PaneDirective>;

  @ViewChild('tabsContainer') navContainerElement: ElementRef;
  @ViewChild('navListElement') navListElement: ElementRef;

  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() onPrevClick = new EventEmitter<void>();//向左滑动触发
  @Output() onNextClick = new EventEmitter<void>();//向右滑动触发
  @Input() TabBarExtraContent: TemplateRef<void>;//额外操作模块
  @Input() tabList: Array<any>;
  @Input()
  set showPagination(value: boolean) {
    this._showPagination = value;
  }
  get showPagination(): boolean {
    return this._showPagination;
  }

  // el: HTMLElement;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private updateHostClassService: UpdateHostClassService,
    @Optional() @Inject(DOCUMENT) private document: any,
    @Optional() private dir: Directionality,
  ) {
    // this.el = this.elementRef.nativeElement;
  }
  ngOnInit() {
    this.setClassMap();
    // console.log(this.navContainerElement.nativeElement);
  }

  onContentChanges() {
    if (this.showPagination) {
      this.updatePagination();
    }
    this.alignInkBarToSelectedTab();
  }

  /**
   * 更新滚动条状态
   */
  updatePagination(): void {
    console.log('更新 Pagination');
    this.checkPaginationEnabled();
    this.checkScrollingControls();
    this.updateTabScrollPosition();
  }

  /**
   * 是否需要加载滚动条
   */
  checkPaginationEnabled(): void {
    console.log('是否需要打开Pagination');
    console.log("scrollWidthHeight:" + this.tabListScrollWidthHeightPix + ",offsetWidth:" + this.elementRefOffSetWidthHeight);
    this.showPaginationControls =
      this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;
    if (!this.showPaginationControls) {
      this.scrollDistance = 0;
    }
  }

  /**
   * 更新滚动条位置
   */
  updateTabScrollPosition(): void {
    const scrollDistance = this.scrollDistance;
    const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
    this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);

  }
  //todo
  getLayoutDirection(): Direction {
    return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  setClassMap(): void {
    const classMap = {
      ['tabs-nav-container-scrolling']: true//显示滚动条
    };
    this.updateHostClassService.updateHostClass(this.navContainerElement.nativeElement, classMap);
  }

  alignInkBarToSelectedTab(): void {
    // if (this.nzType === 'line') {
    //   const selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
    //     ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
    //     : null;
    //   if (this.nzTabsInkBarDirective) {
    //     this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
    //   }
    // }
  }
  checkScrollingControls(): void {
    // Check if the pagination arrows should be activated.
    this.disableScrollBefore = this.scrollDistance === 0;
    this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
  }
  onScroll($event: Event): void {
    console.log('scroll');
    const target: Element = $event.target as Element;
    if (target.scrollLeft > 0) {
      target.scrollLeft = 0;
      if (this.document && this.document.activeElement) {
        (this.document.activeElement as HTMLElement).blur();
      }
    }
  }

  clickLabel($event): void {
    // if (!disabled) {
    //   this.selectedIndex = index;
    //   console.log(this.selectedIndex);
    //   // this.tabList[index].nzClick.emit();
    // }
    console.log($event);
  }

  getMaxScrollDistance(): number {
    return (this.tabListScrollWidthHeightPix - this.viewWidthHeightPix) || 0;
  }
  @Input()
  set selectedIndex(value: number) {
    this._indexToSelect = value;
  }
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  ngAfterContentChecked() {
    console.log("this.tabLabelCount:" + this.tabLabelCount);
    console.log("this.listTabLabelDirective:" + this.listTabLabelDirective.length);
    if (this.tabLabelCount !== this.listTabLabelDirective.length) {
      if (this.showPagination) {
        console.log('this.showPagination:' + this.showPagination);
        this.updatePagination();
      }
      this.tabLabelCount = this.listTabLabelDirective.length;
    }
    if (this.selectedIndexChanged) {
      this.scrollToLabel(this._selectedIndex);
      if (this.showPagination) {
        this.checkScrollingControls();
      }
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
    }
    if (this.scrollDistanceChanged) {
      if (this.showPagination) {
        this.updateTabScrollPosition();
      }
      this.scrollDistanceChanged = false;
    }
  }

  ngAfterContentInit(): void {
    console.log(this.topLevelPanes);
    console.log(this.listTabLabelDirective.length)
    this.realignInkBar = this.ngZone.runOutsideAngular(() => {
      const dirChange = this.dir ? this.dir.change : observableOf(null);
      const resize = typeof window !== 'undefined' ?
        fromEvent(window, 'resize').pipe(auditTime(10)) :
        observableOf(null);
      return merge(dirChange, resize).pipe(startWith(null)).subscribe(() => {
        if (this.showPagination) {
          this.updatePagination();
        }
        this.alignInkBarToSelectedTab();
      });
    });
  }

  scrollToLabel(labelIndex: number): void {
    const selectedLabel = this.listTabLabelDirective
      ? this.listTabLabelDirective.toArray()[labelIndex]
      : null;

    if (selectedLabel) {
      // The view length is the visible width of the tab labels.

      let labelBeforePos: number;
      let labelAfterPos: number;
      if (this.getLayoutDirection() === 'ltr') {
        labelBeforePos = selectedLabel.getOffsetLeft();
        labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
      } else {
        labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
        labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
      }
      const beforeVisiblePos = this.scrollDistance;
      const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;

      if (labelBeforePos < beforeVisiblePos) {
        // Scroll header to move label to the before direction
        this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
      } else if (labelAfterPos > afterVisiblePos) {
        // Scroll header to move label to the after direction
        this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
      }
    }
  }
  createChangeEvent(index: number): TabChangeEvent {
    const event = new TabChangeEvent();
    event.index = index;
    if (this.tabList && this.tabList.length) {
      event.tab = this.tabList[index];
      this.tabList.forEach((item, i) => {
        if (i !== index) {
          // item.nzDeselect.emit();
        }
      });
      // event.tab.nzSelect.emit();
    }
    return event;
  }

  scrollHeader(scrollDir: ScrollDirection): void {
    if (scrollDir === 'before' && !this.disableScrollBefore) {
      this.onPrevClick.emit();
    } else if (scrollDir === 'after' && !this.disableScrollAfter) {
      this.onNextClick.emit();
    }
    // Move the scroll distance one-third the length of the tab list's viewport.
    this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
  }

  set scrollDistance(v: number) {
    this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this.scrollDistanceChanged = true;
    this.checkScrollingControls();
  }

  get scrollDistance(): number {
    return this._scrollDistance;
  }

  get viewWidthHeightPix(): number {
    let PAGINATION_PIX = 0;
    if (this.showPaginationControls) {
      PAGINATION_PIX = 64;
    }
    return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
  }

  get elementRefOffSetWidthHeight(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

  get tabListScrollWidthHeightPix(): number {
    return this.navListElement.nativeElement.scrollWidth;
  }

  ngOnDestroy(): void {

  }
}
