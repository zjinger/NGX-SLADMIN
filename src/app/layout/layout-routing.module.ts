import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../workspace/dashboard/dashboard.module#DashboardModule' },
            { path: 'sys', loadChildren: '../workspace/system/system.module#SystemModule' },
            { path: 'third', loadChildren: '../third-plugin/third-plugin.module#ThirdPluginModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
