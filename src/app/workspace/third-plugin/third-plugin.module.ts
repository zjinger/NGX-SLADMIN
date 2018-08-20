import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafjsComponent } from './leafjs/leafjs.component';
import { routing } from './third-plugin.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LeafjsComponent]
})
export class ThirdPluginModule { }
