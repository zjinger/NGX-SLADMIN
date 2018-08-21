import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.less']
})
export class ContentHeaderComponent implements OnInit {
  tabList: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
