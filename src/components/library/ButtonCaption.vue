<template>
  <span 
    class="menu_input menu_cpt"
    :class="{noclick: $route.name === 'Contact'}"
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
        text-align: center;
        background: @tertiary;
        .white;
        .br;
        &:hover {
          background: @tertiarylight;
        }
      }
</style>
