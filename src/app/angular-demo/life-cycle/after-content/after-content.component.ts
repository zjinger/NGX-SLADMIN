import { Component, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child',
  template: `<input [(ngModel)]="hero">`
})
export class ChildComponent {
  hero = 'Magneta';
}


@Component({
  selector: 'after-content',
  template: `
  <div>-- projected content begins --</div>
  <ng-content></ng-content>
<div>-- projected content ends --</div>`
    + `
<p *ngIf="comment" class="comment">
  {{comment}}
</p>
  `
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {

  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild: ChildComponent;

  constructor(private logger: LoggerService) {
    console.log('AfterContent constructor');
  }

  ngAfterContentChecked(): void {
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }
  ngAfterContentInit(): void {
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
}

@Component({
  selector: 'after-content-parent',
  template: `
  <div class="parent">
  <h2>AfterContent</h2>

  <div *ngIf="show">` +
    `<after-content>
      <app-child></app-child>
    </after-content>`
    + `</div>

  <h4>-- AfterContent Logs --</h4>
  <p><button (click)="reset()">Reset</button></p>
  <div *ngFor="let msg of logger.logs">{{msg}}</div>
</div>
  `,
  styles: ['.parent {background: burlywood}'],
})
export class AfterContentParentComponent {
  constructor(private logger: LoggerService) { }
  show = true;
  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
