import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AngularDemoRoutingModule } from './angular-demo-routing.module';
import { DomComponent } from './dom/dom.component';
import {
  TemplateRefComponent,
  ViewContainerRefComponent,
  EelementRefComponent,
  DynamicComComponent
} from './dom';

import {
  DecoratorComponent,
  ContentChildComponent,
  ViewChildComponent
} from './decorator';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    AngularDemoRoutingModule
  ],
  declarations: [
    DomComponent,
    TemplateRefComponent,
    EelementRefComponent,
    ViewContainerRefComponent,
    DynamicComComponent,
    DecoratorComponent,
    ContentChildComponent,
    ViewChildComponent
  ],
  entryComponents: [
    TemplateRefComponent, EelementRefComponent, ViewContainerRefComponent
  ]
})
export class AngularDemoModule { }
