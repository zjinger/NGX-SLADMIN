import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    TabComponent
  ]
})
export class DashboardModule { }
