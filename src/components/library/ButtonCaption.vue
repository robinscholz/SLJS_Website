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
        padding: 9px 8px 6px 8px;
        text-align: center;
        background: @primary;
        .br;
        &:hover {
          background: @white;
        }
      }
</style>
