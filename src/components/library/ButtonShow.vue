<template>
  <span 
    class="menu_input menu_showall"
    :class="{noclick: $route.name === 'Contact', active: $store.state.showCollection}"
    v-on:click="SHOW_COLLECTIONS($store.state.showCollection = !$store.state.showCollection), SHIVER(shiverTrueFalse)"
  >{{ showhide }} Index</span>  
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {

    name: 'ButtonShow',
    computed: {
      showhide () {
        return this.$store.state.showCollection ? 'Hide' : 'Show'
      },
      shiverTrueFalse () {
        if (this.$store.state.showCollection) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      ...mapMutations([
        'SHOW_COLLECTIONS',
        'SHIVER'
      ])
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  .menu_showall {
      padding: 8px 8px 6px 8px;
      text-align: center;
      background: @primary;
      .black;
      .br;
      &:hover {
        background: @white;
      }
    }
</style>
