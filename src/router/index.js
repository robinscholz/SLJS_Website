import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Image from '@/components/Image'
import Home from '@/components/Home'
// import { store } from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/',
      redirect: { name: 'Index' }
      // redirect: to => {
      //   store.dispatch('LOAD_DATASET').then(() => {
      //     var rightNow = new Date()
      //     var formatted = rightNow.toISOString().slice(0, 15).replace(/-/g, '').replace(/T/g, '').replace(/:/g, '')
      //     var curr = formatted % store.state.apidata['3-misc'].total + 1
      //     console.log(curr)
      //     return '/' + curr
      //   })
      //   // return '/' + curr
      // }
    },
    {
      path: '/:index',
      name: 'Index',
      component: Index,
      props: true
    }, {
      path: '/:index/:imageid',
      name: 'Image',
      component: Image,
      props: true
      // children: [
      //   {
      //     path: ':num(\\d+)',
      //     component: ProjectImage,
      //     props: true,
      //     name: 'projectimg'
      //   }
      // ]
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
