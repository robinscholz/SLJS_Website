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
      contact () {
        return this.apidata['1-contact']
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
      background: @yellow;
      padding: @mp-f @mp-b @mp-b @mp-b;
      .fs-s;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
</style>
