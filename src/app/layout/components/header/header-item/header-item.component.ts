import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderItemComponent implements OnInit {
  @Input() className: string;
  @Input() iconClass: string;
  @Input() labelClass: string;
  @Input() title: string;
  @Input() badge: number;
  @Input() footerTip: string;
  @Input() footerLink: string;
  public list: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
