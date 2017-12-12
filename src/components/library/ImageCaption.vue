<template>
    <div class='caption_wrapper' v-bind:class="{ caption_active: $store.state.caption }">
      <template v-if="$store.state.caption">
        <span class='caption_title' v-if="title">{{title}}</span>
        <span class='caption_caption' v-if="caption"v-html="caption"></span>
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
      .fs-s;
      // position: absolute;
      bottom: 0;
      margin: @mp-a 0;
      visibility: hidden;
      display: none;
      align-items: flex-start;
      flex-direction: row;
      max-width: 700px;
    }
    &_active {
    // .br;
    visibility: visible;
    display: flex;
    }
    &_title {
      display: inline;
      padding: @mp-a;
      margin: 0 @mp-a;
      // margin: @mp-a @mp-a 0 @mp-a;
      white-space: nowrap;
      background: rgba(255,255,255,1);
    }
    &_caption {
      // display: inline;
      margin: 0 @mp-a;
      padding: @mp-a;
      background: rgba(255,255,255,1);

    }
  }
</style>
