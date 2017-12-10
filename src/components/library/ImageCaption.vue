<template>
    <div class='caption_wrapper' v-bind:class="{ caption_active: $store.state.caption }">
      <!-- <span v-if="!$store.state.caption">?</span> -->
      <template v-if="$store.state.caption">
        <span class='caption_title' v-if="title">{{title}}</span><br><br>
        <span class='caption_caption' v-if="caption">{{caption}}</span>
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
      .fs-s;
      .black;
      // .white;
      position: absolute;
      bottom: 0;
      margin: @mp-b;
      border-radius: 5px;
      visibility: hidden;
    }
    &_active {
      visibility: visible;
    }
    &_title {
      background: @tertiary;
    }
    &_caption {
      display: inline;
      background: @tertiary;
      margin-top: @mp-b;
    }
  }
</style>
