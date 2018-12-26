import { BlogModule } from './blog/blog.module';
import { AppTranslationModule } from './app.translation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalState } from './global.state';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    BlogModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AppTranslationModule,
    routing
  ],
  providers: [
    GlobalState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
