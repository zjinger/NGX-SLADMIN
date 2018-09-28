import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TitleService } from './title.service';
import { SettingsService } from './setting.service';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    // private menuService: MenuService,
    private settingService: SettingsService,
    private titleService: TitleService,
    private httpClient: HttpClient,
  ) { }
  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      this.httpClient.get('assets/app-data.json')
        .subscribe((res: any) => {
          console.log('load');
          console.log(res);
          this.settingService.setApp(res.app);
          this.settingService.setUser(res.user);
          // 设置ＡＣＬ权限为全量
          // this.aclService.setFull(true);
          // 初始化菜单
          // this.menuService.add(res.menu);
          // 调整语言
          // this.tr.use(this.settingService.layout.lang);
          // 设置语言后缀
          this.titleService.suffix = res.app.name;
          resolve(res);
        }, (err: HttpErrorResponse) => {
          resolve(null);
        });
    });
  }
}
