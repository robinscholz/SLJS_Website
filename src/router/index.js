import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Image from '@/components/Image'
import Home from '@/components/Home'

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
      props: true
      // children: [
      //   {
      //     path: ':num(\\d+)',
      //     component: Image,
      //     props: true,
      //     name: 'Image'
      //   }
      // ]
    }, {
      path: '/:index/:num(\\d+)',
      name: 'Image',
      component: Image,
      props: true
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

// router.beforeEach((to, from, next) => {
//   if (store.state.apidata.length === 0) {
//   }
// })

export default router
