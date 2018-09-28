import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SettingsService } from './setting.service';
import { MenuService } from './menu.service';
import { TitleService } from './title.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  providers: [
    SettingsService,
    MenuService,
    TitleService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
