import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  entryComponents: [
  ]
})

export class WorkspaceModule { }

