import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPane]'
})
export class PaneDirective {
  
  constructor() { }
  @Input() id: string;
}
