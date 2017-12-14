<template>
    <div class='caption_wrapper' v-bind:class="{ caption_active: $store.state.caption }">
      <template v-if="$store.state.caption">
        <span class='caption_title' v-if="title">{{title}}</span>
        <!-- <span class='caption_caption' v-if="caption"v-html="caption"></span> -->
      </template>
    </div>
</template>

<script>
  export default {
    name: 'ImageCaption',
    props: ['index', 'imageTitle', 'imageCaption'],
    computed: {
      title () {
        return this.imageTitle
      },
      caption () {
        return this.imageCaption
      }
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  .caption {
    &_wrapper {
      .black;
      .fs-m;
      position: absolute;
      bottom: 3px;
      margin: @mp-b;
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
      padding: 2px 5px;
      background: @primary;
      .br;
    }
  }
</style>
