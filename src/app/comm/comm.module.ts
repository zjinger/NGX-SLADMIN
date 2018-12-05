import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommRoutingModule } from './comm-routing.module';
import { Page500Component } from './page500/page500.component';
import { Page404Component } from './page404/page404.component';
import { SessionComponent } from './session/session.component';

@NgModule({
  imports: [
    CommonModule,
    CommRoutingModule
  ],
  declarations: [Page500Component, Page404Component, SessionComponent]
})
export class CommModule { }
