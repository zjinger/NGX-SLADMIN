import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from '../shared/shared.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {
  HeaderComponent,
  HeaderItemComponent,
  SidebarComponent,
  FooterComponent,
  FullscreenComponent,
  ContentHeaderComponent,
  ControlSidebarComponent,
  ReuseTabComponent,
  MenuComponent,
  MenuItemComponent,
  SearchFormComponent,
  UserPanelComponent,
  TabNavComponent,
  TabsetComponent,
  ReuseTabContextComponent,
  ReuseTabContextMenuComponent
} from './components';
import {
  SlSlimScrollDirective,
  TabLabelDirective,
  ReuseTabContextDirective
} from './directives';
import {
  TabsetService,
  MenuService,
  ReuseTabContextService,
  ReuseTabService
} from './services';
import { RouteReuseStrategy } from '@angular/router';
import { CustomeRouteReuseStrategy } from './route-reuse-strategy';

const COMPONENTS = [
  HeaderComponent,
  HeaderItemComponent,
  SidebarComponent,
  FooterComponent,
  FullscreenComponent,
  ContentHeaderComponent,
  ControlSidebarComponent,
  ReuseTabComponent,
  MenuComponent,
  MenuItemComponent,
  SearchFormComponent,
  UserPanelComponent,
  TabNavComponent,
  LayoutComponent,
  TabsetComponent,
  ReuseTabComponent,
  ReuseTabContextComponent,
  ReuseTabContextMenuComponent,
]
const DIRECTIVES = [
  SlSlimScrollDirective,
  TabLabelDirective,
  ReuseTabContextDirective,
]
const SERVICES = [
  TabsetService,
  MenuService,
  ReuseTabContextService,
  ReuseTabService
]
@NgModule({
  imports: [
    SharedModule.forRoot(),
    LayoutRoutingModule,
    HttpClientModule,
    OverlayModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
    ReuseTabService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomeRouteReuseStrategy,
      deps: [ReuseTabService]
    }
  ],
  entryComponents: [
    ReuseTabContextMenuComponent
  ],
  exports: []
})
export class LayoutModule { }
