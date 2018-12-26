import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent, PostInfoComponent, PostHandleComponent } from './post';
import { BlogAdminRoutingModule } from './blog-admin-routing.module';
const POST_COMPONENTS = [PostListComponent, PostInfoComponent, PostHandleComponent];
import { CommentComponent } from './comment';
@NgModule({
  imports: [
    CommonModule,
    BlogAdminRoutingModule
  ],
  declarations: [
    ...POST_COMPONENTS,
    CommentComponent,
  ],
  providers: [

  ]
})
export class BlogAdminModule { }
