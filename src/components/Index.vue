<template>
  <div class="main_wrapper" v-if="apidata.length !== 0">
    <NameWidget></NameWidget>
    <ButtonMenu></ButtonMenu>
<<<<<<< HEAD
    <IndexMasonry></IndexMasonry>
    <!-- <CycleScreensaver></CycleScreensaver> -->
=======
    <CycleScreensaver></CycleScreensaver>
    <div class="collection_img" :class="image.orientation" v-for="image in collections[$store.state.picked].images" :style="{ 'background-image': 'url(' + image.url + ')' }"></div>
>>>>>>> origin/master
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'
  import CycleScreensaver from './library/CycleScreensaver.vue'
  import IndexMasonry from './library/IndexMasonry.vue'
  import NameWidget from './library/NameWidget.vue'

  export default {
    name: 'Index',
    components: {
      ButtonMenu,
      CycleScreensaver,
      IndexMasonry,
      NameWidget
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
      }
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
