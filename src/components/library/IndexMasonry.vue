<template>
  <masonry
  class="collection_wrapper"
  :gutter="0"
  :index=index
  v-if="apidata.length !== 0"
  >
    <router-link
      v-for="(image, i) in images" 
      class="collection_link" 
      :to="index + '/' + image.num" 
      :key="image.url"
    >
      <clazy-load 
        :src="image.url"
        element=".main_wrapper"
        margin="100%"
        class="collection_img_wrapper"
        :class="[shakeClass(i), shakeIdle(i)]"
      >
        <img :src="image.url" class="collection_img" slot="image">
        <ImageCaption 
          :imageTitle="image.imgtitle" 
          :imageCaption="image.caption" 
          :captionColor="image.captioncolor" 
          slot="image" 
          v-if="image.imgtitle || image.caption"
        ></ImageCaption>
        <div class="collection_placeholder" :style="imageHeight(image)" slot="placeholder"></div>
      </clazy-load>
    </router-link>
  </masonry>
</template>

<script>
  import ImageCaption from '../library/ImageCaption.vue'
  // import { mapMutations } from 'vuex'
  import _ from 'underscore'

  export default {
    name: 'IndexMasonry',
    components: {
      ImageCaption
    },
    props: ['index', 'imageTitle', 'imageCaption'],
    data () {
      return {
        idleStatus: false,
        idleNumOne: 1,
        idleNumTwo: _.random(0, 8),
        num: '2'
      }
    },
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return this.apidata['2-collections']
      },
      collection () {
        return this.collections[this.index]
      },
      images () {
        return this.collection['images']
      },
      imgnum () {
        return _.size(this.images)
      },
      classes () {
        return this.$store.state.animations
      }
    },
    onIdle () {
      this.startIdle()
    },
    onActive () {
      this.stopIdle()
    },
    methods: {
      // ...mapMutations([
      //   'SHUFFLE_ANIMATIONS'
      // ]),
      imageHeight (image) {
        const height = (window.innerWidth > 768) ? 50 / image.ratio : 100 / image.ratio
        const pixels = (window.innerWidth > 768) ? 2 * image.ratio : 3 * image.ratio
        const string = 'height: calc(' + height + 'vw - ' + pixels + 'px)'
        return string
      },
      startIdle () {
        this.idleStatus = true
        this.interval = setInterval(function () {
          this.idleNumOne = this.idleNumOne === this.imgnum ? 1 : this.idleNumOne + 1
          this.idleNumTwo = this.idleNumTwo === _.size(this.classes) - 1 ? 0 : this.idleNumTwo + 1
        }.bind(this), 4000)
      },
      stopIdle () {
        this.idleStatus = false
        this.idleNumOne = 1
        this.idleNumTwo = _.random(0, 8)
        // this.SHUFFLE_ANIMATIONS()
        clearInterval(this.interval)
      },
      shakeClass (i) {
        const shiver = this.$store.state.shiver
        if (shiver) {
          return this.classes[i % 9]
        }
      },
      shakeIdle (i) {
        if (this.idleStatus && !this.$store.state.shiver) {
          console.log(parseInt(i))
          console.log(this.idleNumOne)
          if (parseInt(i) === this.idleNumOne) {
            return this.classes[this.idleNumTwo]
          }
        }
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
