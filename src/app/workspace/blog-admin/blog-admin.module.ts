import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent, PostInfoComponent, PostHandleComponent } from './post';
import { BlogAdminRoutingModule } from './blog-admin-routing.module';
const POST_COMPONENTS = [PostListComponent, PostInfoComponent, PostHandleComponent];
import { CommentComponent } from './comment';
import { PostService } from './post/post.service';
import { EditorMdDirective } from './post/editor/editor-md.directive';
import { ModalModule } from 'ngx-bootstrap';
import { PostConfirmComponent } from './post/post-confirm-modal/post-confirm.component';
import { PostSaveSuccessComponent } from './post/post-save-success/post-save-success.component';
@NgModule({
  imports: [
    CommonModule,
    BlogAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ...POST_COMPONENTS,
    CommentComponent,
    EditorMdDirective,
    PostConfirmComponent,
    PostSaveSuccessComponent
  ],
  providers: [
    PostService
  ],
  entryComponents: [
    PostConfirmComponent,
    PostSaveSuccessComponent
  ]
})
export class BlogAdminModule { }
