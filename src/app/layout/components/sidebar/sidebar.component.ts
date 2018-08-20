import { Component, OnInit, Input, Output, EventEmitter, HostListener, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  
  //导航栏是否折叠
  @Input() sidebarCollapsed: boolean = false;
  //左侧导航栏滚动高度
  public menuHeight: number;
  Selector = {
    wrapper: '.wrapper',
    contentWrapper: '.content-wrapper',
    layoutBoxed: '.layout-boxed',
    mainFooter: '.main-footer',
    mainHeader: '.main-header',
    sidebar: '.sidebar',
    controlSidebar: '.control-sidebar',
    fixed: '.fixed',
    sidebarMenu: '.sidebar-menu',
    logo: '.main-header .logo'
  }
  
  constructor() { }

  ngOnInit() {

  }
  @HostListener('window:resize')
  public onWindowResize(): void {
    this.updateSidebarHeight();
  }

  public updateSidebarHeight(): void {
    this.menuHeight = $(window).height() - $(this.Selector.mainHeader).height()
    // console.log(this.menuHeight)
  }
  ngAfterViewInit() {
    setTimeout(() => this.updateSidebarHeight());
  }
}
