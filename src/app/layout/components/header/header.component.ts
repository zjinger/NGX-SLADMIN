import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UpdateHostClassService } from './../../../shared/services/update-host-class.service';
import { GlobalState } from 'src/app/global.state';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [UpdateHostClassService]
})
export class HeaderComponent implements OnInit {

  constructor(
    private updateClass: UpdateHostClassService,
    @Inject(DOCUMENT) private document: Document,
    private _state: GlobalState
  ) {
  }

  ngOnInit() {
    // console.log('classNameList:', this.document.body.classList);
  }
  /**
   * 收缩导航栏
   */
  collapseSidebar() {
    // console.log('collapseSidebar')
    // this.updateClass.updateHostClass(document.body, { ['sidebar-collapse']: true });
    let bodyClasList = this.document.body.classList;
    let isCollspsed = bodyClasList.contains('sidebar-collapse');
    if (isCollspsed) {
      bodyClasList.remove('sidebar-collapse')
    } else {
      bodyClasList.add('sidebar-collapse')
    }
    this._state.notifyDataChanged('menu.isCollapsed', !isCollspsed);
    return false;
  }
}
