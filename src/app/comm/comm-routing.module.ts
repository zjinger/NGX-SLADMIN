import { PostHandleComponent } from './post-handle/post-handle.component';
import { Page500Component } from './page500/page500.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  { path: '', component: Page404Component },
  { path: '500', component: Page500Component },
  { path: 'sessionout', component: SessionComponent },
  { path: 'post/add', component: PostHandleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommRoutingModule { }
