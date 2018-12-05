import { AppTranslationModule } from './../app.translation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog.component';
import { PostComponent, CommentComponent, PostItemComponent, PostInfoComponent } from './post';
import { HeaderComponent, FooterComponent, BannerComponent, ImageShowComponent, LabelModuleComponent } from './layout';
import { InstagramComponent } from './instagram/instagram.component';
import { SharedModule } from '../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PostService } from './service';
import { HttpModule } from '@angular/http';
import { ContentComponent } from './content/content.component';
@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpModule,
    AppTranslationModule,
    TabsModule.forRoot(),
    SharedModule
  ],
  declarations: [
    IndexComponent,
    BlogComponent,
    PostComponent,
    PostItemComponent,
    CommentComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    InstagramComponent,
    ImageShowComponent,
    LabelModuleComponent,
    PostInfoComponent,
    ContentComponent
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
