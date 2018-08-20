import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlSlimScrollDirective } from './directives/sl-slim-scroll.directive';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
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
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,

  ],
  exports: []
})
export class LayoutModule { }
