import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
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
  @Input() child: boolean = false;
  @Output() toggleSubMenu = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onToggleSubMenu(event: any, item: any) {
    event.item = item;
    this.toggleSubMenu.emit(event);
  }
}
