// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Meta from 'vue-meta'
import VueMasonry from 'vue-masonry-css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
sync(store, router) // router sync
Vue.use(Meta)
Vue.use(VueMasonry)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
