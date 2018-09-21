import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LeafjsComponent,
  CkeditorComponent,
  TreeviewComponent,
  InputSelect2Component,
  LeafletComponent
} from './index';
const routes: Routes = [
  {
    path: 'leaflet-test',
    component: LeafletComponent,
    data: { title: 'LeafletTest', reuseTitle: 'LeafletTest' }
  },
  {
    path: 'leaflet',
    component: LeafjsComponent,
    data: { title: 'Leaflet', reuseTitle: 'Leaflet' }
  },
  {
    path: 'ckeditor',
    component: CkeditorComponent,
    data: { title: 'CKEditor', reuseTitle: 'CKEditor' }
  },
  {
    path: 'treeview',
    component: TreeviewComponent,
    data: { title: 'Treeviwe', reuseTitle: 'Treeviwe' }
  },
  {
    path: 'select2',
    component: InputSelect2Component,
    data: { title: 'Select2', reuseTitle: 'Select2' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPluginRoutingModule { }
