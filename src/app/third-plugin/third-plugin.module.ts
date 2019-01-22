// import { InMemoryDataService } from './leafjs/in-memory-data.service';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ThirdPluginRoutingModule } from './third-plugin-routing.module';
import {
  CkeditorComponent,
  LeafjsComponent,
  TreeviewComponent,
  InputSelect2Component,
  LeafletComponent
} from './index';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const COMPONENTS = [
  CkeditorComponent,
  LeafjsComponent,
  TreeviewComponent,
  InputSelect2Component,
  LeafletComponent
]
@NgModule({
  imports: [
    SharedModule.forRoot(),
    ThirdPluginRoutingModule,
    HttpClientModule,
    CKEditorModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class ThirdPluginModule { }
