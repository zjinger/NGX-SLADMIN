import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostInfoComponent } from './post';
import { InstagramComponent } from './instagram/instagram.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'article', component: PostComponent },
      { path: 'detail/:id', component: PostInfoComponent },
      { path: 'instagram', component: InstagramComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
