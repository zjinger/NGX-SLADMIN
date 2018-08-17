import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppPicturePipe } from './pipes/app-picture.pipe';
// const DIRECTIVES = [
  
// ]
const PIPES = [
  AppPicturePipe
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
