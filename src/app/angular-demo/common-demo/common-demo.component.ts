import { Component, OnInit, ElementRef } from '@angular/core';
import { ComponentItem } from '../../shared/models';
import { CenterHVComponent } from './center-h-v/center-h-v.component';
import { ViewChildComponent, ContentChildComponent, ContentChildrenComponent } from '../decorator';

export class ComponentType {
  id: string;
  comItem: ComponentItem
}

@Component({
  selector: 'app-common-demo',
  templateUrl: './common-demo.component.html',
  styleUrls: ['./common-demo.component.less']
})
export class CommonDemoComponent implements OnInit {
  comItems: ComponentType[];
  comItem: ComponentItem;
  el: HTMLElement
  constructor(private elementRef: ElementRef) {
    this.comItems = [
      {
        id: 'hv',
        comItem: {
          componnet: CenterHVComponent,
          data: {
            name: 'zhangsan',
            age: 12
          }
        }
      },
      {
        id: 'vc',
        comItem: {
          componnet: ViewChildComponent
        }
      },
      {
        id: 'cc',
        comItem: {
          componnet: ContentChildComponent
        }
      }, {
        id: 'ch',
        comItem: {
          componnet: ContentChildrenComponent
        }
      },
    ]
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    //:host {display:block}
    // //console.log(this.el.offsetWidth);
  }

  loadComponent(type: string) {
    let item = this.comItems.find(ele => ele.id == type);
    if (item) {
      this.comItem = item.comItem;
    }
  }
}
