export const SYSTEM_MENU: any[] = [
    {
        header: true,
        title: 'COMPONENTS',
        items: [
            {
                title: 'Dashboard',
                icon: 'fa fa-dashboard',
                // selectedIcon: 'task-menu',
                expanded: true,
                selected: true,
                children: [
                    {
                        title: 'Dashboard',
                        icon: 'fa fa-circle-o',
                        selected: true,
                        link: 'dashboard'
                    }
                ]
            }
        ]
    },
    {
        header: true,
        title: 'THIRD PLUGIN',
        items: [
            {
                title: '第三方扩展',
                icon: 'fa fa-dashboard',
                children: [
                    // {
                    //     title: 'leafletjs',
                    //     icon: 'fa fa-circle-o',
                    //     link: '/third/leaflet'
                    // },
                    // {
                    //     title: 'leafletjs-test',
                    //     icon: 'fa fa-circle-o',
                    //     link: '/third/leaflet-test'
                    // },
                    {
                        title: 'treeview',
                        icon: 'fa fa-circle-o',
                        link: '/admin/third/treeview'
                    },
                    {
                        title: 'ckeditor',
                        icon: 'fa fa-circle-o',
                        link: '/admin/third/ckeditor'
                    }, {
                        title: 'select2',
                        icon: 'fa fa-circle-o',
                        link: '/admin/third/select2'
                    }
                ]
            }
        ]
    },
    {
        header: true,
        title: 'ANGULAR-DEMO',
        items: [
            {
                title: 'DEMO',
                icon: 'fa fa-dashboard',
                children: [
                    {
                        title: 'demo',
                        icon: 'fa fa-circle-o',
                        link: '/admin/demo/common'
                    },
                    {
                        title: 'dom',
                        icon: 'fa fa-circle-o',
                        children: [
                            {
                                title: 'TemplateRef',
                                icon: 'fa fa-circle-o',
                                link: '/admin/demo/dom/template',
                            },
                            {
                                title: 'ElementRef',
                                icon: 'fa fa-circle-o',
                                link: '/admin/demo/dom/element',
                            },
                            {
                                title: 'ViewContainerRef',
                                icon: 'fa fa-circle-o',
                                link: '/admin/demo/dom/container',
                            },
                            {
                                title: 'DynamicComponent',
                                icon: 'fa fa-circle-o',
                                link: '/admin/demo/dom/dynamic',
                            }
                        ]
                    },
                    {
                        title: 'decorator',
                        icon: 'fa fa-circle-o',
                        children: [
                            {
                                title: '@ContentChild&ContentChildren',
                                icon: 'fa fa-circle-o',
                                link: '/admin/demo/decorator/contentc'
                            },
                            {
                                title: '@ViewChild&ViewChildren',
                                icon: 'fa fa-circle-o',
                                link: '/admin/demo/decorator/viewc'
                            }
                        ]
                    }, {
                        title: 'LifeCycle',
                        icon: 'fa fa-circle-o',
                        link: '/admin/demo/lifecycle',
                    }
                ]
            }
        ]
    }
]

