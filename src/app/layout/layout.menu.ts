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
        title: 'MAIN NAVIGATION',
        items: [
            {
                title: 'Dashboard',
                icon: 'fa fa-dashboard',
                // selectedIcon: 'task-menu',
                expanded: false,
                children: [
                    {
                        title: 'Dashboard11',
                        icon: 'fa fa-circle-o',
                        selected: false,
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

