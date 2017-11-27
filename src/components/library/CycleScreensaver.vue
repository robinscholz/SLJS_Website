<template>
  <div class="screensaver_wrapper">
    <div v-for="collection in collections" class="screensaver_element">
      <div>{{ collection.title }}</div>
      <img v-for="thumb in collection.thumbs" :src="thumb.url" >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CycleScreensaver',
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
  @import "../../less/global.less";

  .screensaver_element {
    width: 100vw;
    height: 100vh;
    background: red;
    margin-bottom: 50px;
  }

</style>
