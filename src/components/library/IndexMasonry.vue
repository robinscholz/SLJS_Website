<template>
  <masonry
  class="collection_wrapper"
  :cols="{default: 2, 768: 1}"
  :gutter="0"
  >
    <router-link
      v-for="(image, i) in collections[index].images" 
      class="collection_link" 
      :to="index + '/' + image.num" 
      :key="image.url"
    >
        <clazy-load 
          :src="image.url"
          element=".main_wrapper"
          margin="100%"
          class='collection_img_wrapper'
          v-bind:class="shakeClass(i)"
        >
          <img :src="image.url" class="collection_img" slot="image">
          <ImageCaption :imageTitle="image.imgtitle" :imageCaption="image.caption" slot="image" v-if="image.imgtitle || image.caption"></ImageCaption>
          <div class="collection_placeholder" :style="imageHeight(image)" slot="placeholder"></div>
        </clazy-load>
      </router-link>
    </masonry>
  </keep-alive>
</template>

<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
<script>
  import ImageCaption from '../library/ImageCaption.vue'
  import _ from 'underscore'

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
      },
      num () {
        var imgCount = _.values(this.collections[this.index].images).length
        var masonryCount = imgCount > 5 ? 3 : 2
        return masonryCount
      }
    },
    methods: {
      imageHeight (image) {
        const height = (window.innerWidth > 768) ? 50 / image.ratio : 100 / image.ratio
        const pixels = (window.innerWidth > 768) ? 2 * image.ratio : 3 * image.ratio
        const string = 'height: calc(' + height + 'vw - ' + pixels + 'px)'
        return string
      },
      shakeClass (i) {
        const shiver = this.$store.state.shiver
        if (shiver && i % 2 === 0) {
          return 'shakeone'
        } else if (shiver && i % 2 === 1) {
          return 'shaketwo'
        }
      }
    },
    watch: {
      num: function () {
        console.log(this.num)
        this.$VueMasonry.reCalculate()
      }
    }
  }
</script>

<style lang="less">
  @import "../../less/global.less";

  .collection {
    &_wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
      font-size: 0;
      padding: 1px 2px;
    }
    &_link {
      cursor: pointer;
      text-decoration: none;
      .black;
    }
    &_img_wrapper {
      position: relative;
      overflow: hidden;
    }
    &_img {
      display: block;
      width: calc(~"100% - 1px");
      padding: 1px 0px 1px 1px;
      margin: 0;
      transition: .5;
    }
    &_placeholder {
      display: block;
      width: calc(~"100% - 2px");
      margin: 2px 0px 1px 1px;
      background: @white;
    }
  }
</style>
