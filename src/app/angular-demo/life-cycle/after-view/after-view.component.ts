import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child-view',
  template: `
    <input [(ngModel)]="hero"/>
  `
})
export class ChildViewComponent {
  hero = 'zhangjingzhangjingzhangjing';
}



@Component({
  selector: 'app-after-view',
  template: `
  <div>-- child view begins --</div>
    <app-child-view></app-child-view>
  <div>-- child view ends --</div>`
    + `
  <p *ngIf="comment" class="comment">
    {{comment}}
  </p>
`

})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {

  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  private prevHero = '';
  constructor() { }

  ngAfterViewInit(): void {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');
    this.doSomething();
  }
  ngAfterViewChecked(): void {
    if (this.prevHero === this.viewChild.hero) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      console.log('AfterViewChecked');
      this.doSomething();
    }
  }
  comment = '';
  doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      setTimeout(() => {
        this.comment = c;
      }, 0);
    }
  }


}


