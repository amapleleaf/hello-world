const Basic = () => import('./views/Basic')
const About = () => import('./views/About')
/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      name: '关于',
      icon: 'user'
    }
  },{
    path: '/basic',
    name: 'basic',
    component: Basic,
    meta: {
      name: '基础',
      icon: 'eye'
    }
  }
]

export default dynamicRoutes
