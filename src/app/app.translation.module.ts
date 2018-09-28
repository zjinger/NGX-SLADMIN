import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (HttpLoaderFactory),
    deps: [HttpClient]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class AppTranslationModule {

  constructor(private translate: TranslateService) {
    translate.addLangs(["zh_cn", "en"]);
    translate.setDefaultLang('en');
    // translate.use('zh_cn');
    // 根据浏览器语言判断
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh_cn/) ? browserLang : 'zh_cn');

  }

}
