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
                    },
                    {
                        title: 'Dashboard2',
                        icon: 'fa fa-circle-o',
                    }
                ]
            },
            {
                title: 'Forms',
                label: 'forms',
                icon: 'fa fa-book'
            },
            {
                title: 'Box',
                label: 'box',
                icon: 'fa fa-archive'
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
                    {
                        title: 'leafletjs',
                        icon: 'fa fa-circle-o',
                        link: '/third/leaflet'
                    },
                    {
                        title: 'leafletjs-test',
                        icon: 'fa fa-circle-o',
                        link: '/third/leaflet-test'
                    },
                    {
                        title: 'treeview',
                        icon: 'fa fa-circle-o',
                        link: '/third/treeview'
                    },
                    {
                        title: 'ckeditor',
                        icon: 'fa fa-circle-o',
                        link: '/third/ckeditor'
                    }, {
                        title: 'select2',
                        icon: 'fa fa-circle-o',
                        link: '/third/select2'
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
                        title: 'dom',
                        icon: 'fa fa-circle-o',
                        link: '/demo/dom',
                    },
                    {
                        title: 'template',
                        icon: 'fa fa-circle-o',
                        link: '/demo/template',
                    },
                    {
                        title: 'viewchild',
                        icon: 'fa fa-circle-o',
                        link: '/demo/element',
                    },
                    {
                        title: 'container',
                        icon: 'fa fa-circle-o',
                        link: '/demo/container',
                    }
                ]
            }
        ]
    }
]

