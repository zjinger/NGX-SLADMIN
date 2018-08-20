export const SYSTEM_MENU: any[] = [
    {
        header: true,
        title: 'MAIN NAVIGATION',
        items: [
            {
                title: 'Dashboard',
                icon: 'fa fa-dashboard',
                // selectedIcon: 'task-menu',
                expanded: true,
                selected: true,
                children: [
                    {
                        title: 'Dashboard11',
                        icon: 'fa fa-circle-o',
                        selected: true,
                        link: 'dashboard'
                    },
                    {
                        title: 'Dashboard12',
                        icon: 'fa fa-circle-o',
                    }
                ]
            },
            {
                title: 'Documentation',
                label: 'Documentation',
                icon: 'fa fa-book'
            }
        ]
    }
    ,
    {
        header: true,
        title: 'THIRD PLUGIN',
        items: [
            {
                title: 'Third Plugin',
                icon: 'fa fa-dashboard',
                // selectedIcon: 'task-menu',
                children: [
                    {
                        title: 'leafjs',
                        icon: 'fa fa-circle-o',
                        link: '/third/leaft'
                    },
                    {
                        title: 'Dashboard12',
                        icon: 'fa fa-circle-o',
                    }
                ]
            },
            {
                title: 'Documentation',
                label: 'Documentation',
                icon: 'fa fa-book'
            }
        ]
    }
]

