<template>
  <div id="app">
    <!-- <SiteHead></SiteHead> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import SiteHead from './components/library/SiteHead.vue'

export default {
  name: 'App',
  created () {
    this.$store.dispatch('LOAD_DATASET')
  }
  // components: {
  //   SiteHead
  // }
}
</script>

<style lang="less">
  @import "less/global.less";

  body {
    // background: @blue;
  }
</style>
