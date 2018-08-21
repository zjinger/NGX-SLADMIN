import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {
    LeafjsComponent,
    CkeditorComponent,
    TreeviewComponent
} from './index';
export const routes: Routes = [
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
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
