import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDemoComponent } from './custom-demo/custom-demo.component';

const routes: Routes = [
    {
        path: 'custom-plugin',
        component: CustomDemoComponent,
        data: { title: 'CustomPlugin', reuseTitle: 'CustomPlugin' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomPluginRoutingModule { }

