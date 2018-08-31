import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
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
} from './components';
import {
  SlSlimScrollDirective,
  TabLabelDirective
} from './directives';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TabsetService } from './services/tabset.service';
import { HttpClientModule } from '@angular/common/http';

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
]
const DIRECTIVES = [
  SlSlimScrollDirective,
  TabLabelDirective
]
@NgModule({
  imports: [
    SharedModule.forRoot(),
    LayoutRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
    TabsetService
  ],
  exports: []
})
export class LayoutModule { }
