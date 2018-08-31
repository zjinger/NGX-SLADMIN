import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter, Renderer2, Optional, Inject } from '@angular/core';
import { toNumber } from '../../../../shared/util/convert';
import { TabsetService } from '../../../services/tabset.service';
import { UpdateHostClassService } from '../../../../shared/services';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export class TabChangeEvent {
  index: number;
  tab: any;
}
@Component({
  selector: 'header-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less'],
  host: {
    '(scroll)': 'onScroll($event)'
  },
})
export class TabsetComponent implements OnInit {
  tabList: Array<any>;
  private _indexToSelect: number | null = 0;
  private _selectedIndex: number | null = null;

  selectedIndex: number;

  el: HTMLElement;

  // @Input()
  // set selectedIndex(value: number | null) {
  //   this._indexToSelect = toNumber(value, null);
  // }
  // get selectedIndex(): number | null {
  //   return this._selectedIndex;
  // }

  @Output()
  get selectedIndexChange(): Observable<number> {
    return this.selectChange.pipe(map(event => event.index));
  }

  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>(true);

  constructor(
    private tabsetService: TabsetService,
    private updateHostClassService: UpdateHostClassService,
    private elementRef: ElementRef,

  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.setClassMap();
    this.tabsetService.getTabs().subscribe(tabs => {
      this.tabList = tabs;
    })
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

  clickLabel(index: number, disabled: boolean): void {
    if (!disabled) {
      this.selectedIndex = index;
      // this.listOfNzTabComponent[index].nzClick.emit();
    }
  }

  setClassMap(): void {
    const classMap = {
      ['test']: true
    };
    // console.log(this.el);
    this.updateHostClassService.updateHostClass(this.el, classMap);
  }
  onScroll($event) {
    console.log('scroll');
  }

  /**
   * 右滑回调事件
   */
  nextClick() {

  }
  /**
   * 左滑回调事件
   */
  prevClick() { }
}
