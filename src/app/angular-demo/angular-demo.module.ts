import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDemoRoutingModule } from './angular-demo-routing.module';
import { DomComponent } from './dom/dom.component';
import {
  TemplateRefComponent,
  ViewContainerRefComponent,
  EelementRefComponent
} from './dom';

@NgModule({
  imports: [
    CommonModule,
    AngularDemoRoutingModule
  ],
  declarations: [DomComponent, TemplateRefComponent, EelementRefComponent, ViewContainerRefComponent]
})
export class AngularDemoModule { }
