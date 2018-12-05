import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[baScrollPosition]'
})
export class BaScrollPosition {

  @Input() public maxHeight: number;
  @Output() public scrollChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
  ) { }
  private _isScrolled: boolean;

  public ngOnInit(): void {
    // console.log(window.scrollY)
    // this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // console.log(window.scrollY, this.maxHeight)
    let isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }
}
