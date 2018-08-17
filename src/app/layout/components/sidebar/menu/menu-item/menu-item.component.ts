import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls:['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: any
  @Input() child: boolean = false;
  @Output() toggleSubMenu = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  public onToggleSubMenu($event: any, item: any): boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
