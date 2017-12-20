<template>
    <div class='caption_wrapper' :class="[{caption_active: $store.state.caption}, captionColor]">
      <template v-if="$store.state.caption">
        <span class='caption_title' v-if="imageTitle">{{imageTitle}}</span>
        <!-- <span class='caption_caption' v-if="imageCaption" v-html="imageCaption"></span> -->
      </template>
    </div>
</template>

<script>
  export default {
    name: 'ImageCaption',
    props: ['index', 'imageTitle', 'imageCaption', 'captionColor']
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  .caption {
    &_wrapper {
      .fs-s;
      position: absolute;
      bottom: 0px;
      margin: 17px @mp-b;
      visibility: hidden;
      display: none;
      align-items: flex-start;
      flex-direction: row;
      max-width: 700px;
    }
    &_active {
    visibility: visible;
    display: block;
    }
    &_title {
      // display: block;
      // padding: 3px 5px;
      // background: @primary;
      // .br;
    }
  }
</style>
