const Basic = () => import('./views/Basic')
const About = () => import('./views/About')
const MyAbout = () => import('./views/About/MyAbout')
const YourAbout = () => import('./views/About/YourAbout')
/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      name: '关于',
      icon: 'el-icon-warning-outline'
    },
    children:[
      {
        path: '/myabout',
        name: 'MyAbout',
        component: MyAbout,
        meta: {
          name: '关于我',
          icon: 'el-icon-more'
        }
      },
      {
        path: '/yourabout',
        name: 'YourAbout',
        component: YourAbout,
        meta: {
          name: '关于你',
          icon: 'el-icon-more-outline'
        }
      }
    ]
  },{
    path: '/basic',
    name: 'basic',
    component: Basic,
    meta: {
      name: '基础',
      icon: 'el-icon-picture-outline-round'
    }
  }
]

export default dynamicRoutes
