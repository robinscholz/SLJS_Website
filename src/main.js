// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Meta from 'vue-meta'
// import VueMasonry from 'vue-masonry-css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import IdleVue from 'idle-vue'
import VueClazyLoad from 'vue-clazy-load'
import VueObserveVisibility from 'vue-observe-visibility'
import VueMasonry from './plugins/masonry'
import VueGoodTable from 'vue-good-table'

Vue.config.productionTip = false
sync(store, router) // router sync
Vue.use(Meta)
Vue.use(VueMasonry)
Vue.use(VueAwesomeSwiper)
Vue.use(VueClazyLoad)
Vue.use(VueObserveVisibility)
Vue.use(VueGoodTable)

// Idle
const eventsHub = new Vue()
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 20000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
