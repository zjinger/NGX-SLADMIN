import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
  { path: '', redirectTo: '/blog/index', pathMatch: 'full', },
  { path: 'common', loadChildren: './comm/comm.module#CommModule' },
  { path: '**', redirectTo: 'common' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
