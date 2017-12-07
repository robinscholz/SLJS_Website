<template>
  <ButtonMenu></ButtonMenu>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'

  export default {
    name: 'Home',
    components: {
      ButtonMenu
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
