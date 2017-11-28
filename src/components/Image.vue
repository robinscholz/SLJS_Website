<template>
  <div class="img_wrapper" v-if="apidata.length !== 0">
    <div class="img_inner"></div>
  </div>
</template>

<script>


  export default {
    name: 'Image',
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return this.apidata['2-collections']
      },
      misc () {
        return this.apidata['3-misc']
      }
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
