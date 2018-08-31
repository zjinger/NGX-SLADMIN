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
  ViewChildComponent,
  ContentChildrenComponent,
  SubComponentComponent
} from './decorator';

import {
  LifeCycleComponent
} from './life-cycle';

import {
  CenterHVComponent,
  CommonDemoComponent
} from './common-demo';

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
    ViewChildComponent,
    LifeCycleComponent,
    CommonDemoComponent,
    CenterHVComponent,
    SubComponentComponent,
    ContentChildrenComponent,
  ],
  entryComponents: [
    TemplateRefComponent,
    EelementRefComponent,
    ViewContainerRefComponent,
    CenterHVComponent,
    ContentChildComponent,
    ViewChildComponent,
    ContentChildrenComponent
  ]
})
export class AngularDemoModule { }
