import { FormsModule } from '@angular/forms';
import { EditorMdDirective } from './post-handle/editor/editor-md.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommRoutingModule } from './comm-routing.module';
import { Page500Component } from './page500/page500.component';
import { Page404Component } from './page404/page404.component';
import { SessionComponent } from './session/session.component';
import { PostHandleComponent } from './post-handle/post-handle.component';

@NgModule({
  imports: [
    CommonModule,
    CommRoutingModule,
    FormsModule
  ],
  declarations: [Page500Component, Page404Component, SessionComponent, PostHandleComponent, EditorMdDirective]
})
export class CommModule { }
