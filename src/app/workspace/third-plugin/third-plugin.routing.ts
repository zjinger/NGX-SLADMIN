import { LeafjsComponent } from './leafjs/leafjs.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
    {
        path: 'leaft',
        component: LeafjsComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
