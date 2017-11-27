<template>
  <div class="main_wrapper" v-if="apidata.length !== 0">
    <ButtonMenu></ButtonMenu>
    <div class="collection_img" :class="image.orientation" v-for="image in collections[$store.state.picked].images" :style="{ 'background-image': 'url(' + image.url + ')' }"></div>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'

  export default {
    name: 'Index',
    components: {
      ButtonMenu
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
      },
      initial () {
        var rightNow = new Date()
        var formatted = rightNow.toISOString().slice(0, 10).replace(/-/g, '')
        var curr = formatted % 1
        return curr
      }
    },
    created () {
      // this.$store.dispatch('UPDATE_PICKED', this.initial)
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";

  .collection {
    &_img {
      width: calc(~"100vw - 80px");
      height: calc(~"100vh - 40px");
      margin: 20px 40px;
      padding: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      &.portrait {
        height: calc(~"150vh - 40px");
        background-size: contain
      }
    }
  }
</style>
