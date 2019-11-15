import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('./views/layout/index')
const Home = () => import('./views/Home')
const Login = () => import('./views/Login')
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    component: Login
  }]
})

export const DynamicRoutes = [{
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
        icon: 'tree'
      }
    }
  ]
}]
