import router, { DynamicRoutes } from '@/router'
import dynamicRouter from '@/dynamic-router'
export default {
  namespaced:true,
  state: {
    permissionList: null /** 所有路由 */,
    sidebarMenu: [] /** 导航菜单 */,
    currentMenu: '' /** 当前active导航菜单 */,
    control_list: [] /** 完整的权限列表 */,
    avatar: ''/** 头像 */,
    account: ''/** 用户角色 */
  },
  mutations:{
    SET_AVATAR(state, avatar) {
      state.avatar = avatar
    },
    SET_ACCOUNT(state, account) {
      state.account = account
    },
    SET_PERMISSION(state, routes) {
      state.permissionList = routes
    },
    CLEAR_PERMISSION(state) {
      state.permissionList = null
    },
    SET_MENU(state, menu) {
      state.sidebarMenu = menu
    },
    CLEAR_MENU(state) {
      state.sidebarMenu = []
    },
    SET_CURRENT_MENU(state, currentMenu) {
      state.currentMenu = currentMenu
    },
    SET_CONTROL_LIST(state, list) {
      state.control_list = list
    }
  },
  actions: {
    FETCH_PERMISSION({ commit, state }){
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      commit('SET_AVATAR',"admin.gif")
      commit('SET_ACCOUNT',"admin")
      let MainContainer = DynamicRoutes.find(v => v.path === '')
      let children = MainContainer.children
      commit('SET_CONTROL_LIST', [...children, ...dynamicRouter])
      commit('SET_MENU', [...children, ...dynamicRouter])
      router.addRoutes(DynamicRoutes)
    }
  }
}
