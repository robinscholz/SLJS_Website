<template>
  <div id="app">
    <!-- <SiteHead></SiteHead> -->
    <router-view></router-view>
  </div>
</template>

<!-- Polyfill for older browsers -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
<script>
// import SiteHead from './components/library/SiteHead.vue'
import _ from 'underscore'

export default {
  name: 'App',
    // components: {
  //   SiteHead
  // }
  created () {
    // Load API Data
    this.$store.dispatch('LOAD_DATASET').then(() => {
      this.urlForward()
    })
  },
  updated () {
    this.urlForward()
  },
  methods: {
    // Forward to random collection
    urlForward () {
      if (this.$route.name === 'Home') {
        var rightNow = new Date() // Date
        var formatted = rightNow.toISOString().slice(0, 15).replace(/-/g, '').replace(/T/g, '').replace(/:/g, '') // Format (10 min)
        var rand = formatted % this.$store.state.apidata['3-misc'].total // math is fun
        var collections = _.values(this.$store.state.apidata['2-collections']) // Create Array of Collections
        var gotourl = collections[rand].uid // get uid for url
        this.$router.push('/' + gotourl) // forward app
      }
    }
  }
}
</script>

<style lang="less">
  @import "less/global.less";
</style>
