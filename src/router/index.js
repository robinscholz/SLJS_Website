import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Image from '@/components/Image'
import Home from '@/components/Home'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/:index',
      name: 'Index',
      component: Index,
      props: true,
      beforeEnter: (to, from, next) => {
        store.dispatch('LOAD_DATASET').then(() => {
          var index = to.params.index
          var collections = store.state.apidata['2-collections']
          if (index in collections) {
            next()
          } else {
            router.push('/')
          }
        })
      }
    }, {
      path: '/:index/:num(\\d+)',
      name: 'Image',
      component: Image,
      props: true
      // beforeEnter: (to, from, next) => {
      //   store.dispatch('LOAD_DATASET').then(() => {
      //     var index = to.params.index
      //     var num = String(to.params.num)
      //     var images = store.state.apidata['2-collections'][index]['images']
      //     if (num in images) {
      //       next()
      //     } else {
      //       router.push('/' + index)
      //     }
      //   })
      // }
    },
    { path: '*', redirect: '/' }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
