import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ReuseTabComponent } from './components/reuse-tab/reuse-tab.component';
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { SearchFormComponent } from './components/sidebar/search-form/search-form.component';
import { UserPanelComponent } from './components/sidebar/user-panel/user-panel.component';
import { MenuItemComponent } from './components/sidebar/menu/menu-item/menu-item.component';
import { SlSlimScrollDirective } from './directives/sl-slim-scroll.directive';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { TabNavComponent } from './components/content-header/tab-nav/tab-nav.component';

const COMPONENTS = [
  HeaderComponent,
  SidebarComponent,
  LayoutComponent,
  FooterComponent,
  FullscreenComponent,
  ContentHeaderComponent,
  ControlSidebarComponent,
  ReuseTabComponent,
  MenuComponent,
  MenuItemComponent,
  SearchFormComponent,
  UserPanelComponent,
]
const DIRECTIVES = [
  SlSlimScrollDirective
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    TabNavComponent,
  ],
  exports: []
})
export class LayoutModule { }
