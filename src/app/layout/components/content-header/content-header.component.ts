import { UpdateHostClassService } from './../../../shared/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.less'],
  providers: [UpdateHostClassService]
})
export class ContentHeaderComponent implements OnInit {

  tabList: Array<any>;
  constructor(
  ) {
    
  }
  ngOnInit() {
    this.tabList = [
      {
        title: 'tab1',
        active: true
      }, {
        title: 'tab2'
      }, {
        title: 'tab3'
      }, {
        title: 'tab4'
      },
      {
        title: 'tab5'
      }, {
        title: 'tab6'
      }, {
        title: 'tab7'
      }, {
        title: 'tab8'
      }, {
        title: 'tab9'
      }, {
        title: 'tab10'
      }, {
        title: 'tab11'
      }, {
        title: 'tab12'
      }
    ]
  }

}