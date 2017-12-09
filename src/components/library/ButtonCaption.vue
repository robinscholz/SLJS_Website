<template>
  <span 
    class="menu_input menu_cpt"
    v-on:click="SHOW_CAPTIONS($store.state.captions = !$store.state.captions)"
  >i</span>  
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'ButtonCaption',
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
        padding: 12px;
        border-radius: 50%;
        min-width: 44px;
        text-align: center;
        background: @tertiary;
        &:hover {
          background: @tertiarylight;
        }
      }
</style>
