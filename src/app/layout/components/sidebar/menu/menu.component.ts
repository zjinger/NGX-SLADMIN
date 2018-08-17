import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, OnDestroy {
  //导航栏展开触发事件
  @Output() expandMenu = new EventEmitter<any>();
  //导航栏展示的菜单列表
  public menuItems: any[];
  protected _menuItemsSub: Subscription;

  constructor(private _service: MenuService) { }

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
      // console.log(items);
      this.menuItems = items;
    });
  }
  public ngOnDestroy(): void {
    this._menuItemsSub.unsubscribe();
  }

  public toggleSubMenu($event: any): boolean {
    // console.log($event);
    let link = jQuery($event.currentTarget);
    $event.item.expanded = !$event.item.expanded;

    let treeviewMenu = link.next(this.Selector.treeviewMenu);
    var parentLi = link.parent();
    let isOpen = parentLi.hasClass(this.ClassName.open);
    
    if (!parentLi.is(this.Selector.treeview)) {
      return
    }

    if (isOpen) {
      this.collapse(treeviewMenu, parentLi);
    } else {
      this.expand(treeviewMenu, parentLi);
    }
  }

  expand(tree, parent) {
    parent.addClass(this.ClassName.open);
    tree.slideDown(this.Default.animationSpeed);
  }
  collapse(tree, parentLi) {
    tree.find(this.Selector.open).removeClass(this.ClassName.open);
    parentLi.removeClass(this.ClassName.open);
    tree.slideUp(this.Default.animationSpeed);
  }
}
