import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('./views/layout/index')
const Home = () => import('./views/Home')
const Login = () => import('./views/Login')
const NotFound = () => import('./views/errorPage/404')
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name:'login',
    component: Login
  }]
})

export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      name: '首页'
    },
    children: [
      {
        id: 1,
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页',
          icon: 'el-icon-s-home'
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]
