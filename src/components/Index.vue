<template>
  <div class="main_wrapper" v-if="apidata.length !== 0">
    <ButtonMenu></ButtonMenu>
    <!-- <CycleScreensaver></CycleScreensaver> -->
    <div class="collection_img" :class="image.orientation" v-for="image in collections[$store.state.picked].images" :style="{ 'background-image': 'url(' + image.url + ')' }"></div>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'
  import CycleScreensaver from './library/CycleScreensaver.vue'

  export default {
    name: 'Index',
    components: {
      ButtonMenu,
      CycleScreensaver
    },
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

  .collection {
    &_img {
      float: left;
      width: calc(~"100vw");
      height: calc(~"100vh");
      // margin: 20px 40px;
      padding: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      &.portrait {
        height: calc(~"150vh");
        background-size: cover
      }
    }
  }
</style>
