<template>
  <masonry
  class="collection_wrapper"
  :cols="{default: 2, 768: 2, 600: 1}"
  :gutter="0"
  >
    <progressive-img class="collection_img" v-for="image in collections[index].images" :key="image.url" :src="image.url" />
  </masonry>
</template>

<script>
  export default {
    name: 'IndexMasonry',
    props: ['index'],
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

  .collection {
    &_wrapper {
      position: relative;
      z-index: -1;
      width: 100%;
      font-size: 0;
    }
    &_img {
      float: right;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
</style>