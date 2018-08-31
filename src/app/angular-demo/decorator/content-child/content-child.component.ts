import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { SubComponentComponent } from './sub-component/sub-component.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html'
})
export class ContentChildComponent implements OnInit, AfterContentInit {

  @ContentChild(SubComponentComponent) subCom: SubComponentComponent;
  @ContentChildren(SubComponentComponent) subComList: QueryList<SubComponentComponent>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log(this.subCom);
    console.log(this.subComList.length);
  }

}
