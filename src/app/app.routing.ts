import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './workspace/dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'third', loadChildren: './workspace/third-plugin/third-plugin.module#ThirdPluginModule' },
    ]
  },
  {
    path: '**', redirectTo: 'dashboard'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
