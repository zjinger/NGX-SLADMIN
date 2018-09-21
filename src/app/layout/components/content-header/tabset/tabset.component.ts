import { Component, OnInit, Input, ElementRef, Output, EventEmitter, AfterContentChecked, OnDestroy } from '@angular/core';
import { TabsetService } from '../../../services/tabset.service';
import { UpdateHostClassService } from '../../../../shared/services';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TabComponent } from '../../../models';

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
export class TabsetComponent implements OnInit, AfterContentChecked, OnDestroy {

  @Input() tabList: Array<TabComponent>;//tab list

  @Input() selectedIndex: number = 0;//当前选中的tab 下标

  el: HTMLElement;//el 

  tabSourceSubscription: Subscription;//订阅tab 操作

  //订阅下标变化
  @Output()
  get selectedIndexChange(): Observable<number> {
    return this.selectChange.pipe(map(event => event.index));
  }

  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>(true);

  @Output() tabClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private tabsetService: TabsetService,
    private updateHostClassService: UpdateHostClassService,
    private elementRef: ElementRef,

  ) {
    this.el = this.elementRef.nativeElement;
    this.tabSourceSubscription = this.tabsetService.clickTab$.subscribe(tab => {
      if (tab) {
        this.addTab(tab);
      }
    })
  }

  ngOnInit() {
    this.setClassMap();
    // this.tabsetService.getTabs().subscribe(tabs => {
    //   this.tabList = tabs;
    // })
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.

  }

  /**
   * 点击tab 事件
   * @param $event 
   * @param index 
   */
  to($event, index) {
    this.tabClick.emit({ event: $event, index: index });
  }

  createChangeEvent(index: number): TabChangeEvent {
    const event = new TabChangeEvent();
    event.index = index;
    if (this.tabList && this.tabList.length) {
      event.tab = this.tabList[index];
      this.tabList.forEach((item, i) => {
        if (i !== index) {
          item.nzDeselect.emit();
        }
      });
      event.tab.nzSelect.emit();
    }
    return event;
  }

  clickLabel($event, index: number, disabled: boolean): void {
    console.log('click');
    if (!disabled) {
      this.selectedIndex = index;
      this.tabClick.emit({ e: $event, index: index });
    }
  }

  setClassMap(): void {
    const classMap = {
      ['test']: true
    };
    this.updateHostClassService.updateHostClass(this.el, classMap);
  }
  onScroll($event) {
    console.log('scroll');
  }

  /**
   * 右滑回调事件
   */
  nextClick() {
    console.log('右滑动');
  }
  /**
   * 左滑回调事件
   */
  prevClick() {
    console.log('左滑动');
  }

  addTab(value: TabComponent): void {
    this.tabList.push(value);
  }
  removeTab(value: TabComponent): void {
    this.tabList.splice(this.tabList.indexOf(value), 1);
  }

  ngOnDestroy(): void {
    this.tabSourceSubscription.unsubscribe();
  }

}
