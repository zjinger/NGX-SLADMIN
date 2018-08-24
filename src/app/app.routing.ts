import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
