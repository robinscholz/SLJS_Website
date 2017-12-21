<template>
  <div class="contact_wrapper" v-if="apidata.length !== 0">
    <ButtonMenu></ButtonMenu>
    <div class="contact_about">
      <span>Phone: <a :href="'tel:' + contact['phone']">{{ contact['phone'] }}</a></span>
      <span>e-Mail: <a :href="'mailto:' + contact['email']">{{contact['email']}}</a></span>
      <span>Currently living and working in <span  class="nobr">{{ contact['city'] }}</span></span>
    </div>
    <ContactTable v-if="!smallWindow"></ContactTable>
    <ContactText v-else></ContactText>

    <div class="colophon">
      <span>
        Website: <span :class="classes[0]"><a href='http://studioscholz.info/' target='_blank'>Robin Scholz</a></span><span :class="classes[1]"><a href='http://bramvandenberg.com/' target='_blank'>Bram van den Berg</a></span>
      </span> 
      <span class="nobr">
        Typeface: <span :class="classes[2]"><a href='https://twitter.com/w__h_' target='_blank' :class="classes[2]">Wei Huang</a></span>
      </span>
    </div>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'
  import ContactTable from './library/ContactTable.vue'
  import ContactText from './library/ContactText.vue'
  import _ from 'underscore'

  export default {
    name: 'Contact',
    components: {
      ButtonMenu,
      ContactTable,
      ContactText
    },
    data () {
      return {
        smallWindow: false,
        classes: _.shuffle(['shakeone', 'shakefour', 'shakesix'])
      }
    },
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      contact () {
        return this.apidata['1-contact']
      }
    },
    methods: {
      reCalculate: function () {
        const windowWidth = (window ? window.innerWidth : null)
        this.smallWindow = windowWidth <= 1024
      }
    },
    mounted () {
      this.reCalculate()
      if (window) {
        window.addEventListener('resize', this.reCalculate)
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
        &.nobr {
          display: inline;
        }
      }
      a {
        display: inline-block;
        text-decoration: underline;
        text-decoration-skip: ink;
        color: inherit;
      }
    }
  }

  .colophon {
    padding-top: @mp-c;
    .fs-xs;
    span {
      display: inline-block;
      margin-right: @mp-a;
      span {
        &:first-child {
          margin: 0 @mp-b 0 @mp-a;
        }
      }
      a {
        -webkit-text-decoration-skip: ink;
        text-decoration-skip: ink;
        color: inherit;
      }
    }
  }
</style>
