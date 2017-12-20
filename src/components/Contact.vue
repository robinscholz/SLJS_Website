<template>
  <div class="contact_wrapper" v-if="apidata.length !== 0" :style="{ backgroundImage: 'url(' + contact['image'] + ')'}">
    <ButtonMenu></ButtonMenu>
    <div class="contact_about">
      <span>Phone: <a :href="'tel:' + contact['phone']">{{ contact['phone'] }}</a></span>
      <span>e-Mail: <a :href="'mailto:' + contact['email']">{{contact['email']}}</a></span>
      <span>Currently living and working in {{ contact['city'] }}</span>
    </div>
    <ContactTable></ContactTable>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'
  import ContactTable from './library/ContactTable.vue'

  export default {
    name: 'Contact',
    components: {
      ButtonMenu,
      ContactTable
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
      display: block;
      width: 100%;
      min-height: 100vh; 
      background: @primary;
      padding: @mp-e + 5 @mp-b @mp-c @mp-b;
      .fs-s;
    }
    &_about {
      margin: @mp-b 0;
      span {
        display: block;
      }
      a {
        text-decoration: underline;
        text-decoration-skip: ink;
        color: inherit;
      }
    }
  }
</style>
