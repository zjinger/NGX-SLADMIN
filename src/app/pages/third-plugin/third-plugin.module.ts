import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './third-plugin.routing';
import {
  CkeditorComponent,
  LeafjsComponent,
  TreeviewComponent
} from './index'

const COMPONENTS = [
  CkeditorComponent,
  LeafjsComponent,
  TreeviewComponent
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class ThirdPluginModule { }
