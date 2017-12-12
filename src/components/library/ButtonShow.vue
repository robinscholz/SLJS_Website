<template>
  <span 
    class="menu_input menu_showall"
    :class="{noclick: $route.name === 'Contact', active: $store.state.showCollection}"
    v-on:click="SHOW_COLLECTIONS($store.state.showCollection = !$store.state.showCollection)"
  >{{ showhide }} Index</span>  
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {

    name: 'ButtonShow',
    computed: {
      showhide () {
        return this.$store.state.showCollection ? 'Hide' : 'Show'
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

  .menu_showall {
      padding: 3px;
      text-align: center;
      background: @primary;
      .black;
      .br;
      &:hover {
        background: @white;
      }
    }
</style>
