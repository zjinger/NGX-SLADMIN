import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Routes } from '@angular/router';
import { SYSTEM_MENU } from './layout.menu';
import * as jQuery from 'jquery';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
    public isDestroy: boolean;
    public contentHeight: number;

    constructor(private menuService: MenuService) {
        // this.menuService.getMenus().subscribe(res => {
        //     console.log(res);
        // })
    }
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
        logo: '.main-header .logo',
        contentHeader: '.content-header',
    }
    ClassName = {
        fixed: 'fixed',
        holdTransition: 'hold-transition'
    }
    fix() {
        jQuery(this.Selector.layoutBoxed + ' > ' + this.Selector.wrapper).css('overflow', 'hidden')
        let footerHeight = jQuery(this.Selector.mainFooter).outerHeight() || 0
        let neg = jQuery(this.Selector.mainHeader).outerHeight() + footerHeight
        let windowHeight = jQuery(window).height()
        let sidebarHeight = jQuery(this.Selector.sidebar).height() || 0
        let contentHeigth = jQuery(this.Selector.contentHeader).outerHeight() || 0

        if (jQuery('body').hasClass(this.ClassName.fixed)) {
            jQuery(this.Selector.contentWrapper).css('min-height', windowHeight - footerHeight);
            // //console.log(windowHeight - footerHeight);
            setTimeout(() => {
                this.contentHeight = windowHeight - neg - contentHeigth;
            })
        } else {
            this.isDestroy = true;
        }
    }

    ngOnInit(): void {
        this.menuService.updateMenuByRoutes(<Routes>SYSTEM_MENU);
    }

    ngAfterViewInit() {
        this.fix();
    }
    @HostListener('window:resize')
    public onWindowResize(): void {
        this.fix();
    }
}
