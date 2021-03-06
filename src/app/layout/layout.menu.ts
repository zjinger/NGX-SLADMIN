export const SYSTEM_MENU: any[] = [
  {
    title: '博客后台',
    items: [
      {
        title: '文章列表',
        icon: 'fa fa-align-justify',
        link: '/admin/manager/post'
      },
      {
        title: '评论中心',
        icon: 'fa fa-weixin',
        link: '/admin/manager/comment'
      },
      {
        title: '分类管理',
        icon: 'fa fa-list-alt',
        link: '/admin/manager/classify'
      }
    ]
  },
  {
    title: '组件',
    items: [
      {
        title: 'Dashboard',
        icon: 'fa fa-dashboard',
        expanded: false,
        selected: false,
        link: '/admin/dashboard'
      }
    ]
  },
  {
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
          }, {
            title: 'Observable',
            icon: 'fa fa-circle-o',
            link: '/admin/demo/observable',
          }
        ]
      }
    ]
  },
  {
    title: 'CUSTOM PLUGIN',
    items: [
      {
        title: '自定义Angular组件',
        icon: 'fa fa-dashboard',
        children: [
          {
            title: 'custom-plugin',
            icon: 'fa fa-circle-o',
            link: '/admin/custom/custom-plugin'
          }
        ]
      }
    ]
  }
]

