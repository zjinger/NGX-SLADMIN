import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Routes } from '@angular/router';
import { SYSTEM_MENU } from './layout.menu';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
    
    constructor(private menuService: MenuService) { }

    Default = {
        slimscroll: true,
        resetHeight: true
    }

    Selector = {
        wrapper: '.wrapper',
        contentWrapper: '.content-wrapper',
        layoutBoxed: '.layout-boxed',
        mainFooter: '.main-footer',
        mainHeader: '.main-header',
        sidebar: '.sidebar',
        controlSidebar: '.control-sidebar',
        fixed: '.fixed',
        sidebarMenu: '.sidebar-menu',
        logo: '.main-header .logo'
    }

    ClassName = {
        fixed: 'fixed',
        holdTransition: 'hold-transition'
    }
    
    ngOnInit(): void {
        this.menuService.updateMenuByRoutes(<Routes>SYSTEM_MENU);
        
    }
}
