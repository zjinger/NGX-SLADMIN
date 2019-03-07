import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnControls]'
})
export class OnControlsDirective {

  @Output() onControls: EventEmitter<boolean> = new EventEmitter<false>();
  constructor() { }
  @HostListener("mousemove", ["$event"])
  @HostListener('click', ["$event"])
  @HostListener('touchstart', ["$event"])
  public onListenerTriggered(event: any): void {
    this.onControls.emit(true);
  }

}
