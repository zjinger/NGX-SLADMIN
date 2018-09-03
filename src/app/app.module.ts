import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService } from './layout/services/reuse-tab.service';
import { CustomeRouteReuseStrategy } from './route-reuse-strategy';

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
    ReuseTabService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomeRouteReuseStrategy,
      deps: [ReuseTabService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
