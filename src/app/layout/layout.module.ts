import { NgModule } from '@angular/core';
import { SlSlimScrollDirective } from './directives/sl-slim-scroll.directive';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import {
  HeaderComponent,
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
} from './components'


const COMPONENTS = [
  HeaderComponent,
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
  LayoutComponent
]
const DIRECTIVES = [
  SlSlimScrollDirective
]
@NgModule({
  imports: [
    SharedModule.forRoot(),
    LayoutRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,

  ],
  exports: []
})
export class LayoutModule { }
