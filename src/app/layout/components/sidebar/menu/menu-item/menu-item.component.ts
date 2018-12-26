import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less'],
  animations: [
    trigger('treeviewState', [
      state('treeview-menu-open', style({
        display: 'block'
      })),
      state('treeview-menu-close', style({
        display: 'none'
      })),
      transition('treeview-menu-open => treeview-menu-close', [
        animate("500ms ease-in")
      ]),
      transition('treeview-menu-close => treeview-menu-open', [
        animate("500ms ease-out")

      ]),
    ]),
  ],
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: any
  @Input() isMenuCollapsed: boolean = false;
  @Output() toggleSubMenu = new EventEmitter<any>();
  @Output() onSelectMenuItem = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onToggleSubMenu(event: any, item: any) {
    event.item = item;
    this.toggleSubMenu.emit(event);

  }

  /**
   * a标签打开链接
   * @param $event 
   * @param menuItem 
   */
  openLink(event, menuItem) {
    event.item = menuItem;
    this.onSelectMenuItem.emit(event);
  }
}
