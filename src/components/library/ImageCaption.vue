<template>
    <div class='caption_wrapper' v-bind:class="{ caption_active: $store.state.caption }">
      <!-- <span v-if="!$store.state.caption">?</span> -->
<<<<<<< HEAD
      <template v-if="$store.state.caption">
        <span class='caption_title' v-if="title">{{title}}</span>
        <span class='caption_caption' v-if="caption">{{caption}}</span>
      </template>
=======
      <span v-if="$store.state.caption">
        <p class='caption_title' v-if="title">{{title}}</p>
        <p class='caption_caption' v-if="caption">{{caption}}</p>
      </span>
>>>>>>> origin/master
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
      bottom: @mp-a;
      margin: @mp-b;
      visibility: hidden;
    }
    &_active {
    background: @primary; 
    border-radius: 5px;
    visibility: visible;
    }
    &_title {
      background: @primary;
      padding: 8px @mp-a;
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
