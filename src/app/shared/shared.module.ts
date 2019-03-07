import { AuthService } from './services/auth.service';
import { BaScrollPosition } from './directives/baScrollPosition.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppPicturePipe } from './pipes/app-picture.pipe';
import {
  UpdateHostClassService,
  HttpErrorHandler,
  MessageService,
  BaseService
} from './services';
import {
  HostDirective,
  SlSlimScrollDirective,
  LightGalleryDirective,
  OnControlsDirective
} from './directives';
import {
  DynamicComponentItemComponent,
} from './components';


const SHARED_COMPONENTS = [
  DynamicComponentItemComponent,

]
const SHARED_DIRECTIVES = [
  HostDirective,
  SlSlimScrollDirective,
  BaScrollPosition,
  LightGalleryDirective,
  OnControlsDirective
]
const SHARED_PIPES = [
  AppPicturePipe
]
const SHARED_SERVICES = [
  UpdateHostClassService,
  MessageService,
  HttpErrorHandler,
  BaseService,
  AuthService
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENTS,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        ...SHARED_SERVICES
      ]
    };
  }
}
