import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule.forRoot(),
    routing
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
