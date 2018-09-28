import { AppTranslationModule } from './app.translation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { StartupService } from './core/startup.service';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    CoreModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AppTranslationModule,
    routing
  ],
  providers: [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
