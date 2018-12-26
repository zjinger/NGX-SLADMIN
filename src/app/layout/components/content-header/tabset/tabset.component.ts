import { Component, OnInit, Input, ElementRef, Output, EventEmitter, AfterContentChecked, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TabsetService } from '../../../services/tabset.service';
import { UpdateHostClassService } from '../../../../shared/services';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TabComponent } from '../../../models';
import { ReuseContextCloseEvent } from 'src/app/layout/models/reuse-tab';
import { ReuseTabService } from 'src/app/layout/services';

export class TabChangeEvent {
  index: number;
  tab: any;
}
/**
 * 参考 Ant Design of Angular Tabs 标签页
 * https://ng.ant.design/components/tabs/zh
 */
@Component({
  selector: 'header-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less'],
  // host: {
  //   '(scroll)': 'onScroll($event)'
  // },
})
export class TabsetComponent implements OnInit, AfterContentChecked, OnDestroy {
  @Input() tabList: Array<TabComponent>;//tab list
  @Input() selectedIndex: number = 0;//当前选中的tab 下标
  el: HTMLElement;//el 
  // tabSourceSubscription: Subscription;//订阅tab 操作
  //订阅下标变化
  @Output()
  get selectedIndexChange(): Observable<number> {
    return this.selectChange.pipe(map(event => event.index));
  }
  //tab 切换回调
  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>(true);
  //tab 点击回调 
  @Output() tabClick: EventEmitter<any> = new EventEmitter<any>();
  //tab 关闭回调
  @Output() tabClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private updateHostClassService: UpdateHostClassService,
    private elementRef: ElementRef,
    public reuseTabSr: ReuseTabService,
    private cd: ChangeDetectorRef,
  ) {
    this.el = this.elementRef.nativeElement;
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
  clickLabel($event, index: number, disabled: boolean): void {
    // console.log('点击当前tab事件')
    if (!disabled) {
      this.selectedIndex = index;
      this.tabClick.emit({ e: $event, index: index });
    }
  }

  /**给当前组件添加样式 此处只是做个测试*/
  setClassMap(): void {
    const classMap = {
      ['test']: true
    };
    this.updateHostClassService.updateHostClass(this.el, classMap);
  }

  /**
   * 右滑回调事件
   */
  nextClick() {
    console.log('tab 右滑动');
  }
  /**
   * 左滑回调事件
   */
  prevClick() {
    console.log('tab 左滑动');
  }

  /**
   * 移除 tab
   * @param value 
   */
  removeTab(e: Event, index: number, includeNonCloseable: boolean): void {
    console.log('close');
    this.tabClose.emit({ e, index, closeable: includeNonCloseable });
  }
  
  ngOnDestroy(): void {
    // this.tabSourceSubscription.unsubscribe();
  }

}
