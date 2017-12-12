<template>
    <div class='caption_wrapper' v-bind:class="{ caption_active: $store.state.caption }">
      <!-- <span v-if="!$store.state.caption">?</span> -->
      <template v-if="$store.state.caption">
        <span class='caption_title' v-if="title">{{title}}</span>
        <!-- <span class='caption_caption' v-if="caption">{{caption}}</span> -->
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
      position: absolute;
      bottom: 0;
      margin: @mp-a;
      visibility: hidden;
      display: none;
    }
    &_active {
    background: @primary; 
    .br;
    visibility: visible;
    display: block;
    }
    &_title {
      background: @primary;
      padding: @mp-a;
      display: inline-block;
      .br;
      .fs-s;
    }
    &_caption {
      display: inline-block;
      background: @primary;
      margin-top: 2px;
      padding: 8px @mp-a;
      .br;
      .fs-s;
    }
  }
</style>
