<template>
    <div class='caption' v-bind:class="{ caption_active: $store.state.caption }">
      <!-- <span v-if="!$store.state.caption">?</span> -->
      <span v-if="$store.state.caption">
        <p class='caption_title' v-if="title">{{title}}</p>
        <p class='caption_caption' v-if="caption">{{caption}}</p>
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
    background: @white; 
    box-shadow: inset 0 0 2px #b0b0b0;
    .black;
    .fs-m;
    border-radius: 50%;
    visibility: hidden;
    &_placeholder {
    }
    &_caption {
      .fs-xs;
    }
    &_active {
    background: @primary; 
    border-radius: 5px;
    visibility: visible;
    }
  }  
</style>
