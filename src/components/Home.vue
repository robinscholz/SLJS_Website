<template>
  <div>
    <ButtonMenu></ButtonMenu>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'

  export default {
    name: 'Home',
    components: {
      ButtonMenu
    },
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return this.apidata['2-collections']
      },
      misc () {
        return this.apidata['3-misc']
      }
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
