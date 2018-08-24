import { NgModule } from '@angular/core';
import { ThirdPluginRoutingModule } from './third-plugin-routing.module';
import {
  CkeditorComponent,
  LeafjsComponent,
  TreeviewComponent,
  InputSelect2Component
} from './index';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  CkeditorComponent,
  LeafjsComponent,
  TreeviewComponent,
  InputSelect2Component
]
@NgModule({
  imports: [
    SharedModule.forRoot(),
    ThirdPluginRoutingModule
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class ThirdPluginModule { }
