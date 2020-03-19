import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Root from './app.vue'
import routes from "./routes/index"

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  router,
  store,
  // template: '<div>123</div>'
  render: h => h(Root)
}).$mount('#app');