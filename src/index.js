import Vue from 'vue'
import Root from './app.vue'
import VueRouter from 'vue-router'
import routes from "./routes/index";
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  // template: '<div>123</div>'
  render: h => h(Root)
}).$mount('#app');