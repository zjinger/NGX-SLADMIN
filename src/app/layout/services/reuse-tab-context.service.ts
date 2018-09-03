import { Injectable, ElementRef } from '@angular/core';
import {
  Overlay,
  OverlayRef,
  ConnectionPositionPair,
} from '@angular/cdk/overlay';
import { Subject, Subscription } from 'rxjs';
import { ReuseContextEvent, ReuseContextCloseEvent } from '../models/reuse-tab';
import { ComponentPortal } from '@angular/cdk/portal';
import { ReuseTabContextMenuComponent } from '../components/content-header/reuse-tab-context/reuse-tab-context-menu/reuse-tab-context-menu.component';

@Injectable({ providedIn: 'root' })
export class ReuseTabContextService {

  private ref: OverlayRef;
  show: Subject<ReuseContextEvent> = new Subject<ReuseContextEvent>();
  close: Subject<ReuseContextCloseEvent> = new Subject<ReuseContextCloseEvent>();
  
  constructor(private overlay: Overlay) { }

  remove() {
    if (!this.ref) return;
    this.ref.detach();
    this.ref.dispose();
    this.ref = null;
  }

  open(context: ReuseContextEvent) {
    this.remove();
    const { event, item } = context;
    const fakeElement = new ElementRef({
      getBoundingClientRect: (): ClientRect => ({
        bottom: event.clientY,
        height: 0,
        left: event.clientX,
        right: event.clientX,
        top: event.clientY,
        width: 0,
      }),
    });
    const positions = [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' },
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' },
      ),
    ];
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(fakeElement)
      .withPositions(positions);
    this.ref = this.overlay.create({
      positionStrategy,
      panelClass: 'reuse-tab-cm',
      scrollStrategy: this.overlay.scrollStrategies.close(),
    });
    const comp = this.ref.attach(
      new ComponentPortal(ReuseTabContextMenuComponent),
    );
    const instance = comp.instance;
    // instance.i18n = this.i18n;
    instance.item = { ...item };
    instance.event = event;

    const sub$ = new Subscription();
    sub$.add(
      instance.close.subscribe((res: ReuseContextCloseEvent) => {
        this.close.next(res);
        this.remove();
      }),
    );
    comp.onDestroy(() => sub$.unsubscribe());
  }

}
