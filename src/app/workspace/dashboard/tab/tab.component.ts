import { PaneDirective } from './../../../shared/directives/pane.directive';
import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab-dashboard',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  // TODO(issue/24571): remove '!'.
  @ContentChildren(PaneDirective) topLevelPanes !: QueryList<PaneDirective>;
  // TODO(issue/24571): remove '!'.
  @ContentChildren(PaneDirective, { descendants: true }) arbitraryNestedPanes !: QueryList<PaneDirective>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
  constructor() { }

  ngOnInit() {
   
  }

  ngAfterContentInit() {
    console.log(this.topLevelPanes);
  }

  ngAfterContentChecked() {
    // console.log("this.topLevelPanes:"+this.topLevelPanes.length);
  }
}
