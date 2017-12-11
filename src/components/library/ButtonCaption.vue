<template>
  <span 
    class="menu_input menu_cpt"
    :class="{noclick: $route.name === 'Contact', active: $store.state.captions}"
    v-on:click="SHOW_CAPTIONS($store.state.captions = !$store.state.captions)"
  >{{ showhide }} Captions</span>  
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'ButtonCaption',
    computed: {
      showhide () {
        return this.$store.state.caption ? 'Hide' : 'Show'
      }
    },
    methods: {
      ...mapMutations([
        'SHOW_CAPTIONS'
      ])
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";
  .menu_cpt {
        padding: @mp-a;
        // min-width: 149.55px;
        text-align: center;
        background: @tertiary;
        .white;
        .br;
        &:hover {
          background: @tertiarylight;
        }
        &.active {
          margin-left: 8.66px;
          // background: red;
          // word-spacing: 8px;
          // letter-spacing: 0.75px;
        }
      }
</style>
