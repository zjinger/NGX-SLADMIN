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
                        title: 'leafjs',
                        icon: 'fa fa-circle-o',
                        link: '/third/leaft'
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
                    }
                ]
            }
        ]
    }
]

