import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomComponent } from './dom/dom.component';
import {
  TemplateRefComponent,
  ViewContainerRefComponent,
  EelementRefComponent
} from './dom';
const routes: Routes = [
  { path: 'dom', component: DomComponent },
  { path: 'template', component: TemplateRefComponent },
  { path: 'element', component: EelementRefComponent },
  { path: 'container', component: ViewContainerRefComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDemoRoutingModule { }
