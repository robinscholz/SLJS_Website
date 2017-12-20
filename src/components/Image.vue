<template>
  <div class="img_wrapper" v-if="apidata.length !== 0">
    <div class="img_inner" :style="{ 'background-image': 'url(' + image.url + ')' }" v-on:click="goBack"></div>
  </div>
</template>

<script>
  export default {
    name: 'Image',
    props: ['num', 'index'],
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
      image () {
        return this.collection.images[this.num]
      },
      misc () {
        return this.apidata['3-misc']
      }
    },
    metaInfo () {
      // Check if data is loaded
      if (this.apidata.length !== 0) {
        return {
          title: this.contact.title + ': ' + this.collection.title,
          meta: [
            // Facebook / Open Graph
            { property: 'og:title', content: this.contact.title + ': ' + this.collection.title },
            { property: 'og:image', content: this.image.url }
          ],
          link: [
            { rel: 'image_src', href: this.image.url }
          ]
        }
      } else {
        return {
          title: ''
        }
      }
    },
    methods: {
      goBack: function () {
        this.$router.push('/' + this.index)
      }
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
  .img {
    &_wrapper {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
    &_inner {
      width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
</style>
