<template>
  <keep-alive>
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
          <!-- <transition name="fade" slot="image"> -->
          <img :src="image.url" class="collection_img" slot="image">
          <!-- </transition> -->
          <!-- <transition name="fade" slot="placeholder"> -->
          <div class="collection_placeholder" :style="imageHeight(image)" slot="placeholder"></div>
          <!-- </transition> -->
        </clazy-load>
      </router-link>
    </masonry>
  </keep-alive>
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
      imageHeight (image) {
        var height = (window.innerWidth > 600) ? 50 / image.ratio : 100 / image.ratio
        var pixels = (window.innerWidth > 600) ? 2 * image.ratio : 3 * image.ratio
        var string = 'height: calc(' + height + 'vw - ' + pixels + 'px)'
        return string
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
      background: @black;
    }
  }
</style>
