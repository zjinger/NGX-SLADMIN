import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'header-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less']
})
export class TabNavComponent implements OnInit {
  
  @Input() tabList: Array<any>;
  
  //额外操作模块
  @Input() nzTabBarExtraContent: TemplateRef<void>;
  
  
  
  constructor() { }
  
  ngOnInit() {
  }
  

  onContentChanges() {

  }
}
