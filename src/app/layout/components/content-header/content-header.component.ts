import { UpdateHostClassService } from './../../../shared/services';
import { Component, OnInit} from '@angular/core';

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
        name: 'tab1',
        active: true
      }, {
        name: 'tab2'
      }, {
        name: 'tab3'
      }, {
        name: 'tab4'
      },
      {
        name: 'tab5'
      }, {
        name: 'tab6'
      }, {
        name: 'tab7'
      }, {
        name: 'tab8'
      }, {
        name: 'tab9'
      }, {
        name: 'tab10'
      }, {
        name: 'tab11'
      }, {
        name: 'tab12'
      }
    ]
  }

}
