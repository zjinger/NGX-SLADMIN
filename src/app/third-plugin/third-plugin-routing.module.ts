import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LeafjsComponent,
  CkeditorComponent,
  TreeviewComponent,
  InputSelect2Component
} from './index';
const routes: Routes = [
  {
    path: 'leaft',
    component: LeafjsComponent
  },
  {
    path: 'ckeditor',
    component: CkeditorComponent
  },
  {
    path: 'treeview',
    component: TreeviewComponent
  },
  {
    path: 'select2',
    component: InputSelect2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPluginRoutingModule { }
