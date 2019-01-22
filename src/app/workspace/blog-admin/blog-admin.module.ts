import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent, PostInfoComponent, PostHandleComponent } from './post';
import { BlogAdminRoutingModule } from './blog-admin-routing.module';
const POST_COMPONENTS = [PostListComponent, PostInfoComponent, PostHandleComponent];
import { CommentComponent } from './comment';
import { PostService } from './post/post.service';
@NgModule({
  imports: [
    CommonModule,
    BlogAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...POST_COMPONENTS,
    CommentComponent,
  ],
  providers: [
    PostService
  ]
})
export class BlogAdminModule { }
