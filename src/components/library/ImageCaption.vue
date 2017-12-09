<template>
    <div class='caption' v-bind:class="{ caption_active: isActive }" v-on:click="toggleTitle">
      <span class='caption_placeholder' v-if="this.isActive === false">
        {{placeHolder}}
      </span>
      <span v-if="this.isActive === true">
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
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return this.apidata['2-collections']
      },
      misc () {
        return this.apidata['3-misc']
      },
      placeHolder () {
        return 'i'
      },
      title () {
        return this.imageTitle
      },
      caption () {
        return this.imageCaption
      }
    },
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      toggleTitle: function () {
        event.preventDefault()
        console.log(this.isActive)
        this.isActive = !this.isActive
      }
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  .caption {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: @mp-b;
    padding: 12px 20px 12px 20px;
    background: @white; 
    box-shadow: inset 0 0 2px #b0b0b0;
    .black;
    .fs-m;
    border-radius: 50%;
    &_placeholder {
    }
    &_caption {
      .fs-xs;
    }
    &_active {
      border-radius: 12px;
      max-width: 100%;
    }
  }
</style>
