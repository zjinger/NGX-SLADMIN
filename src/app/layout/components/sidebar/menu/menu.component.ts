import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuService } from '../../../services/menu.service';
import { TabService } from './../../../services/tab.service';
import { TabComponent } from 'src/app/layout/models';
import { GlobalState } from 'src/app/global.state';
import * as jQuery from 'jquery';
@Component({
  selector: 'sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, OnDestroy {
  protected _onRouteChange: Subscription;
  //导航栏展开触发事件
  @Output() expandMenu = new EventEmitter<any>();
  //导航栏展示的菜单列表
  public menuItems: any[];
  //tab list
  public tabItems: Array<TabComponent> = []
  protected _menuItemsSub: Subscription;
  protected _tabItemListSub: Subscription;
  
  //菜单栏是否收缩
  public isMenuCollapsed: boolean = false;

  constructor(
    private _service: MenuService,
    private tabService: TabService,
    private _state: GlobalState,
    private _router: Router
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
      // console.log('isCollapsed', isCollapsed)
    })
  }

  public Default = {
    animationSpeed: 500,
    accordion: true,
    followLink: false,
    trigger: '.treeview a'
  }
  public ClassName = {
    open: 'menu-open',
    tree: 'tree'
  }
  public Selector = {
    tree: '.tree',
    treeview: '.treeview',
    treeviewMenu: '.treeview-menu',
    open: '.menu-open, .active',
    li: 'li',
    data: '[data-widget="tree"]',
    active: '.active'
  }
  ngOnInit() {
    this._menuItemsSub = this._service.menuItems.subscribe((items) => {
      //console.log(items);
      this.menuItems = items;
    });

    this._tabItemListSub = this.tabService.tabList$.subscribe(items => {
      // console.log('from tabService', items);
    })
    this._onRouteChange = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {//路由加载完成
        // console.log('menu items', this.menuItems);
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });

  }

  selectMenuAndNotify(): void {
    if (this.menuItems) {
      this._service.selectMenuItem(this.menuItems)
    }
  }

  toggleSubMenu1(event: any) {
    // console.log('event:', event)
    let menuItem = event.item;
    // console.log('menuItem', menuItem);
    menuItem.expanded = !menuItem.expanded;
    // console.log(menuItem.expanded);

  }
  selectMenuItem(event) {
    // console.log('dom', event)
    // let aLink = jQuery(event.target.parentNode)
    // // console.log(aLink)
    // let parentLi = aLink.parent().offsetParent()
    // if (!parentLi.hasClass(this.Selector.active)) {
    //   parentLi.addClass('active');
    // }
  }
  toggleSubMenu(event: any): boolean {
    // console.log('event', event);
    let link = jQuery(event.currentTarget);
    let menuItem = event.item;
    menuItem.expanded = !menuItem.expanded;
    // menuItem.selected = !menuItem.selected;
    // console.log('menuItem', menuItem);
    let treeviewMenu = link.next(this.Selector.treeviewMenu);
    // console.log('treeviewMenu', treeviewMenu)
    var parentLi = link.parent();
    let isOpen = parentLi.hasClass(this.ClassName.open);

    // console.log('parentLi', parentLi);
    if (!parentLi.is(this.Selector.treeview)) {
      return
    }
    if (isOpen) {
      this.collapse(treeviewMenu, parentLi);
    } else {
      this.expand(treeviewMenu, parentLi);
    }
  }

  private expand(tree, parent) {
    parent.addClass(this.ClassName.open);
    tree.slideDown(this.Default.animationSpeed);
  }
  private collapse(tree, parentLi) {
    // tree.find(this.Selector.open).removeClass(this.ClassName.open);
    parentLi.removeClass(this.ClassName.open);
    tree.slideUp(this.Default.animationSpeed);
  }

  public ngOnDestroy(): void {
    this._menuItemsSub.unsubscribe();
    this._onRouteChange.unsubscribe();
    this._tabItemListSub.unsubscribe();
  }
}
