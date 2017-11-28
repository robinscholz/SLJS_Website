import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // redirect: { name: 'Index' }
      redirect: to => {
        // var rightNow = new Date()
        // var formatted = rightNow.toISOString().slice(0, 15).replace(/-/g, '').replace(/T/g, '').replace(/:/g, '')
        // var curr = formatted % this.$store.state.apidata['3-misc'].total + 1
        // var collection = this.$store.state.apidata['2-collections'][curr].title
        return '/collection-1'
      }
    }, {
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

export default router
