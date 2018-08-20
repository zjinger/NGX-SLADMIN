import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /**
   * 收缩导航栏
   */
  collapseSidebar() {

  }
}
