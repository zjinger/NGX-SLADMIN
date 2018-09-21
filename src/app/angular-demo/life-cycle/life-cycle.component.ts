import { Component, OnInit, SimpleChanges, OnChanges, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.less']
})
export class LifeCycleComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name: string;
  constructor() { }

  /**
   * 当 Angular（重新）设置数据绑定输入属性时响应
   * 当被绑定的输入属性的值发生变化时调用
   * 首次调用一定会发生在 ngOnInit() 之前
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    debugger
    //console.log('ngOnChanges');
  }

  /**
   * Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，
   * 初始化指令/组件。
   * 第一轮 ngOnChanges() 完成之后调用，只调用一次。
   */
  ngOnInit() {
    //console.log('ngOnInit');
  }
  /**
   * 
   */
  ngDoCheck() {
    // //console.log('ngDoCheck');
  }

  /**
   * 第一次 ngDoCheck() 之后调用，只调用一次。
   */
  ngAfterContentInit() {
    //console.log('ngAfterContentInit');
  }

  /**
   * 每次完成被投影组件内容的变更检测之后调用。
   * ngAfterContentInit() 和每次 ngDoCheck() 之后调用
   */
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    // //console.log('ngAfterContentChecked');
  }

  /**
   * 初始化完组件视图及其子视图之后调用。
   * 第一次 ngAfterContentChecked() 之后调用
   * 只调用一次
   */
  ngAfterViewInit() {
    //console.log('ngAfterViewInit');
  }

  /**
   * 每次做完组件视图和子视图的变更检测之后调用。
   * ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。
   */
  ngAfterViewChecked() {
    // //console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    //console.log('ngOnDestroy')
  }

}
