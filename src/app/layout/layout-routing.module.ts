import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    { path: 'login', loadChildren: '../workspace/login/login.module#LoginModule' },
    { path: 'register', loadChildren: '../workspace/register/register.module#RegisterModule' },
    {
        path: 'admin',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../workspace/dashboard/dashboard.module#DashboardModule' },
            { path: 'sys', loadChildren: '../workspace/system/system.module#SystemModule' },
            { path: 'third', loadChildren: '../third-plugin/third-plugin.module#ThirdPluginModule' },
            { path: 'demo', loadChildren: '../angular-demo/angular-demo.module#AngularDemoModule' },
            { path: 'manager', loadChildren: '../workspace/blog-admin/blog-admin.module#BlogAdminModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
