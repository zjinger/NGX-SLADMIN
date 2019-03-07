import { Directive, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLightGallery]'
})
export class LightGalleryDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    let bacon = renderer.createText('🥓🥓🥓 ');
    renderer.appendChild(elem.nativeElement, bacon);
  }

  bulid() {

  }
}
