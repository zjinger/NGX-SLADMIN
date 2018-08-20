import { Directive, Input, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import 'jquery-slimscroll';
import 'jquery';
@Directive({
  selector: '[slSlimScroll]'
})
export class SlSlimScrollDirective implements OnChanges {

  @Input() public slimScrollOptions: Object;
  @Input() public isDestroy: boolean;

  constructor(private _elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isDestroy) {
      this._destroy();
    } else {
      this._scroll();
    }
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.slimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
