<template>
  <masonry
  class="collection_wrapper"
  :cols="{default: 2, 768: 2, 600: 1}"
  :gutter="0"
  >
    <router-link v-for="image in collections[index].images" class="collection_link" :to="index + '/' + image.num" :key="image.url">
      <img class="collection_img" :src="image.url" v-on:click="log()"></img>
    </router-link>
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
    },
    methods: {
      log () {
        console.log('clicked')
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
    &_link {
      display: block;
    }
    &_img {
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }
  }
</style>
