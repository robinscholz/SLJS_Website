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
    methods: {
      goBack: function () {
        this.$router.go(-1)
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
