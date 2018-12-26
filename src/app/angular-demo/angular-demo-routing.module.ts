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
    path: 'common', component: CommonDemoComponent, data: { title: 'Demo', reuseTitle: 'Demo' }
  },
  {
    path: 'dom', component: DomComponent,
    children: [
      { path: 'template', component: TemplateRefComponent, data: { title: 'TemplateRef', reuseTitle: 'TemplateRef' } },
      { path: 'element', component: EelementRefComponent, data: { title: 'ElementRef', reuseTitle: 'ElementRef' } },
      { path: 'container', component: ViewContainerRefComponent, data: { title: 'ViewContainerRef', reuseTitle: 'ViewContainerRef' } },
      { path: 'dynamic', component: DynamicComComponent, data: { title: '动态加载组件', reuseTitle: '动态加载组件' } }
    ]
  }, {
    path: 'decorator', component: DecoratorComponent,
    children: [
      { path: 'contentc', component: ContentChildComponent, data: { title: 'ContentChild', reuseTitle: 'ContentChild' } },
      { path: 'viewc', component: ViewChildComponent, data: { title: 'ViewChild', reuseTitle: 'ViewChild' } }
    ]
  }, {
    path: 'lifecycle', component: LifeCycleComponent, data: { title: '生命周期', reuseTitle: '生命周期' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDemoRoutingModule { }
