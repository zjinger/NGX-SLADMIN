import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomComponent } from './dom/dom.component';
import {
  TemplateRefComponent,
  ViewContainerRefComponent,
  EelementRefComponent,
  DynamicComComponent
} from './dom';
import {
  ViewChildComponent,
  ContentChildComponent,
  DecoratorComponent
} from './decorator';
import { CommonDemoComponent } from './common-demo';
import { LifeCycleComponent } from './life-cycle';

const routes: Routes = [
  {
    path: 'common', component: CommonDemoComponent
  },
  {
    path: 'dom', component: DomComponent, children: [
      { path: 'template', component: TemplateRefComponent , data: { title: 'R-title', reuseTitle: 'R-reuseTitle' } },
      { path: 'element', component: EelementRefComponent },
      { path: 'container', component: ViewContainerRefComponent },
      { path: 'dynamic', component: DynamicComComponent }
    ]
  }, {
    path: 'decorator', component: DecoratorComponent, children: [
      { path: 'contentc', component: ContentChildComponent },
      { path: 'viewc', component: ViewChildComponent }
    ]
  }, {
    path: 'lifecycle', component: LifeCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDemoRoutingModule { }
