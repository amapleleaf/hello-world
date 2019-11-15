import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import basic from './basic'
import comm from './comm'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    home,
    basic,
    comm
  }
})

export default store
