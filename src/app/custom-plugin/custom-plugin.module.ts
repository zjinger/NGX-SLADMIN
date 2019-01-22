import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsLoadingComponent } from './js-loading/js-loading.component';
import { CustomDemoComponent } from './custom-demo/custom-demo.component';
import { CustomPluginRoutingModule } from './custom-plugin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomPluginRoutingModule
  ],
  declarations: [JsLoadingComponent, CustomDemoComponent]
})
export class CustomPluginModule { }
