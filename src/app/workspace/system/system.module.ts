import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    SystemRoutingModule
  ],
  declarations: []
})
export class SystemModule { }
