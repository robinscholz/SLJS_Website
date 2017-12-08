<template>
    <div class='caption' v-bind:class="{ caption_active: $store.state.caption }">
      <!-- <span v-if="!$store.state.caption">?</span> -->
      <span v-if="$store.state.caption">
        <p class='caption_title' v-if="title">{{title}}</p>
        <!-- <p class='caption_caption' v-if="caption">{{caption}}</p> -->
      </span>
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
    .fs-xs;
    position: absolute;
    bottom: 0;
    margin: @mp-b;
    padding: @mp-a @mp-a @mp-a @mp-a;
    background: @primary; 
    border-radius: 5px;
    visibility: hidden;
    .black;
    &_active {
      visibility: visible;
    }
  }
</style>
