<template>
  <span 
    class="menu_input menu_cpt"
    :class="{noclick: $route.name === 'Contact', active: $store.state.showCollection}"
    v-on:click="SHOW_COLLECTIONS($store.state.showCollection = !$store.state.showCollection)"
  >Show {{ showhide }} collections</span>  
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {

    name: 'ButtonShow',
    computed: {
      showhide () {
        return this.$store.state.showCollection ? 'less' : 'all'
      }
    },
    methods: {
      ...mapMutations([
        'SHOW_COLLECTIONS'
      ])
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  .menu_scl {
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
      }
    }
</style>
