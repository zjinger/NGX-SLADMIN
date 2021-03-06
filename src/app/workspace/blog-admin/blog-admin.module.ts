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
import { EditorPreviewHtmlComponent } from './post/editor/editor-preview-html/editor-preview-html.component';
import { ClassifyComponent } from './classify/classify.component';
import { ClassifyService } from './classify/classify.service';
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
    PostSaveSuccessComponent,
    EditorPreviewHtmlComponent,
    ClassifyComponent
  ],
  providers: [
    PostService,
    ClassifyService
  ],
  entryComponents: [
    PostConfirmComponent,
    PostSaveSuccessComponent
  ]
})
export class BlogAdminModule { }
