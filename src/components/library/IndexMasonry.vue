<template>
  <masonry
  class="collection_wrapper"
  :cols="{default: 2, 768: 2, 600: 1}"
  :gutter="0"
  >
    <router-link
      v-for="image in collections[index].images" 
      class="collection_link" 
      :to="index + '/' + image.num" 
      :key="image.url"
    >
      <clazy-load 
        :src="image.url"
        element=".main_wrapper"
        margin="100%"
      >
        <transition name="fade" slot="image">
          <img :src="image.url" class="collection_img">
        </transition>
        <transition name="fade" slot="placeholder">
          <div></div>
        </transition>
      </clazy-load>
    </router-link>
  </masonry>
</template>

<!-- Polyfill for older browsers -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
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
      },
      imageProgress (instance, image) {
        console.log('image')
      }
    }
  }
</script>

<style lang="less">
  @import "../../less/global.less";

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .0s
  }

  .collection {
    &_wrapper {
      position: relative;
      width: 100%;
      font-size: 0;
    }
    &_link {
      cursor: pointer;
    }
    &_img {
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
</style>
