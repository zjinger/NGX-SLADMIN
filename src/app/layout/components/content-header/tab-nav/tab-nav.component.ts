import { UpdateHostClassService } from './../../../../shared/services/update-host-class.service';
import { Component, OnInit, Input, TemplateRef, Inject, Optional, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'header-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less'],
  host: {
    '(scroll)': 'onScroll($event)',
    // 'class': 'tabs tabs-top tabs-no-animation tabs-line'
  }, providers: [
    UpdateHostClassService
  ]
})
export class TabNavComponent implements OnInit {

  @ViewChild('tabsContainer') navTabs: ElementRef;

  @Input() tabList: Array<any>;
  el: HTMLElement;
  //额外操作模块
  @Input() nzTabBarExtraContent: TemplateRef<void>;
  constructor(
    private elementRef: ElementRef,
    private updateHostClassService: UpdateHostClassService,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.setClassMap();
  }

  onContentChanges() {

  }
  setClassMap(): void {
    const classMap = {
      ['']: true
    };
    this.updateHostClassService.updateHostClass(this.navTabs.nativeElement, classMap);
  }
  onScroll($event: Event): void {
    const target: Element = $event.target as Element;
    if (target.scrollLeft > 0) {
      target.scrollLeft = 0;
      if (this.document && this.document.activeElement) {
        (this.document.activeElement as HTMLElement).blur();
      }
    }
  }

}
