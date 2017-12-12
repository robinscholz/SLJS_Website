<template>
  <div class="contact_wrapper">
    <ButtonMenu></ButtonMenu>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'

  export default {
    name: 'Contact',
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

  .contact {
    &_wrapper {
      width: 100vw;
      min-height: 100vh;
      background: @secondary;
    }
  }
</style>
