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
  LifeCycleComponent,
  AfterViewComponent,
  ChildViewComponent,
  AfterContentComponent,
  ChildComponent,
  AfterContentParentComponent
} from './life-cycle';

import {
  CenterHVComponent,
  CommonDemoComponent
} from './common-demo';
import { ObservableComponent } from './observable/observable.component';

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
    ObservableComponent,
    ChildViewComponent,
    AfterViewComponent,
    AfterContentComponent,
    ChildComponent,
    AfterContentParentComponent
  ],
  entryComponents: [
    TemplateRefComponent,
    EelementRefComponent,
    ViewContainerRefComponent,
    CenterHVComponent,
    ContentChildComponent,
    ViewChildComponent,
    ContentChildrenComponent,
    AfterViewComponent,
    AfterContentParentComponent
  ]
})
export class AngularDemoModule { }
