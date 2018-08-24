import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppPicturePipe } from './pipes/app-picture.pipe';
import {
  UpdateHostClassService
} from './services';
import {
  PaneDirective
} from './directives'

const SHARED_DIRECTIVES = [
  PaneDirective
]
const SHARED_PIPES = [
  AppPicturePipe
]
const SHARED_SERVICES = [
  UpdateHostClassService
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES
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
