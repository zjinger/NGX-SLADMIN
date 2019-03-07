import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostListComponent, PostHandleComponent, PostInfoComponent } from './post';
import { CommentComponent } from './comment'


const routes: Routes = [
  { path: 'post', component: PostListComponent, data: { title: '文章列表', reuseTitle: '文章列表' } },
  { path: 'post/info/:id', component: PostInfoComponent, data: { title: '文章详情', reuseTitle: '文章详情' } },
  { path: 'post/add', component: PostHandleComponent, data: { title: '新增文章', reuseTitle: '新增文章' } },
  { path: 'post/edit', component: PostHandleComponent, data: { title: '编辑文章', reuseTitle: '编辑文章' } },
  { path: 'comment', component: CommentComponent, data: { title: '评论中心', reuseTitle: '评论中心' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogAdminRoutingModule { }
