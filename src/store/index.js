import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import basic from './basic'
import permission from './permission'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    home,
    basic,
    permission
  }
})

export default store
