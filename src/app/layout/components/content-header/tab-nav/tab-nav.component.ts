import { Component, OnInit, Input, TemplateRef } from '@angular/core';

export type ScrollDirection = 'after' | 'before';
export type NzTabPosition = 'top' | 'bottom' | 'left' | 'right';
export type NzTabPositionMode = 'horizontal' | 'vertical';
export type NzTabType = 'line' | 'card';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less']
})
export class TabNavComponent implements OnInit {
  @Input() nzTabBarExtraContent: TemplateRef<void>;

  showPaginationControls = false;
  disableScrollBefore = true;
  disableScrollAfter = true;
  private _animated: boolean;
  @Input() nzPositionMode: NzTabPositionMode = 'horizontal';
  @Input()
  set nzAnimated(value: boolean) {
    this._animated = value;
  }

  get nzAnimated(): boolean {
    return this._animated;
  }
  constructor() { }

  ngOnInit() {
  }

  scrollHeader(scrollDir: ScrollDirection) {

  }

  onContentChanges() {

  }
}
