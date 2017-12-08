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
        class='collection_imgWrapper'
      >
        <!-- <transition name="fade" slot="image"> -->
        <img :src="image.url" class="collection_img" slot="image">
        <!-- </transition> -->
        <!-- <transition name="fade" slot="placeholder"> -->
        <div class="collection_placeholder" :style="{ height: 'calc(' + 50 / image.ratio + 'vw - ' + 2 * image.ratio + 'px)' }" slot="placeholder"></div>
        <!-- </transition> -->
        <ImageCaption :imageTitle="image.imgtitle" :imageCaption="image.caption" :index=index slot="image" v-if="image.imgtitle || image.caption"></ImageCaption>
      </clazy-load>
    </router-link>
  </masonry>
</template>

<!-- Polyfill for older browsers -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
<script>
  import ImageCaption from '../library/ImageCaption.vue'

  export default {
    name: 'IndexMasonry',
    components: {
      ImageCaption
    },
    props: ['index', 'imageTitle', 'imageCaption'],
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
    transition: opacity .5s
  }

  .collection {
    &_wrapper {
      position: relative;
      width: 100%;
      font-size: 0;
      padding: 1px;
    }
    &_link {
      cursor: pointer;
    }
    &_imgWrapper {
      position: relative;
    }
    &_img {
      display: block;
      width: calc(~"100% - 1px");
      padding: 1px 0px 1px 1px;
      margin: 0;
    }
    &_placeholder {
      display: block;
      width: calc(~"100% - 2px");
      margin: 2px 0px 1px 1px;
      background: @white;
    }
  }
</style>
