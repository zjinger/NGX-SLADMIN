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
  ContentChildComponent
} from './decorator';
import { DecoratorComponent } from './decorator';
const routes: Routes = [
  {
    path: 'dom', component: DomComponent, children: [
      { path: 'template', component: TemplateRefComponent },
      { path: 'element', component: EelementRefComponent },
      { path: 'container', component: ViewContainerRefComponent },
      { path: 'dynamic', component: DynamicComComponent }
    ]
  }, {
    path: 'decorator', component: DecoratorComponent, children: [
      { path: 'contentc', component: ContentChildComponent },
      { path: 'viewc', component: ViewChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDemoRoutingModule { }
