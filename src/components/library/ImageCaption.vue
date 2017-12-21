<template>
    <div class='caption_wrapper' :class="[{caption_active: $store.state.caption}, captionColor]">
      <template v-if="$store.state.caption">
        <span class="caption_title" v-if="imageTitle">{{ imageTitle }}</span>
        <!-- <div class="caption_caption" v-if="imageContext || imagePhoto">
          <span class="caption_context" v-if="imageContext">Shown here at <em>{{imageContext }}</em></span>
          <span>
            <template v-if="imageContext && imageContextDate &&!imagePhoto">({{ imageContextDate }})</template>
            <template v-else-if="imageContext && imageContextDate && imagePhoto">({{ imageContextDate }}, Photgraphy by {{ imagePhoto }})</template>
            <template v-else-if="imagePhoto">Photgraphy by {{ imagePhoto }}</template>
            <template v-else-if="!imageContextDate && imagePhoto">(Photgraphy by {{ imagePhoto }})</template>
          </span>
        </div> -->
      </template>
    </div>
</template>

<script>
  export default {
    name: 'ImageCaption',
    props: ['index', 'imageTitle', 'imageContext', 'imageContextDate', 'imagePhoto', 'captionColor']
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
    &_caption {
      .fs-xs;
      margin-top: @mp-a;
      // display: block;
      // padding: 3px 5px;
      // background: @primary;
      // .br;
    }
    &_photo {
      // display: block;
    }
  }
</style>
