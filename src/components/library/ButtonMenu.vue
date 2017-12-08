<template>
  <swiper class="menu_slider" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="menu_btn">
      <NameWidget class="menu_input"></NameWidget>    
    </swiper-slide>
    <swiper-slide class="menu_btn" v-for="collection in collections" :key="collection.uid">
      <router-link :to="{ path: collection.uid }" class="menu_input">
        {{ collection.title }}
      </router-link>
    </swiper-slide>
    <swiper-slide class="menu_btn">
      <router-link to="contact" class="menu_input">Contact & CV</router-link>    
    </swiper-slide>
  </swiper>
</template>

<script>
  import NameWidget from '../library/NameWidget.vue'
  import _ from 'underscore'

  export default {
    name: 'ButtonMenu',
    props: ['index'],
    data () {
      return {
        swiperOption: {
          freeMode: true,
          slidesPerView: 'auto',
          initialSlide: this.initialSlideNumber,
          grabCursor: true,
          mousewheelControl: false
        }
      }
    },
    components: {
      NameWidget
    },
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return _.sortBy(this.apidata['2-collections'], 'number')
      },
      initialSlideNumber () {
        return parseInt(this.collections[this.index].number)
      }
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";

  .menu {
    &_slider {
      position: fixed;
      width: 100vw;
      top: @mp-b;
      left: 0;
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0;
      z-index: 90;
    }
    &_input {
      display: inline-block;
      cursor: pointer;
      padding: 10px 12px 11px 12px;
      .fs-m;
      text-decoration: none;
      color: @black;
      &.router-link-active {
        // background: @secondary;
        // color: @secondary;
        // text-transform: uppercase;
        letter-spacing: 6px;
        padding-right: 6px;
      }
    }
    &_btn {
      display: inline-block;
      margin: 0 @mp-a;
      background: @white;
      border-radius: 20px;
      box-shadow: inset 0 0 2px #b0b0b0;
      &:first-child {
        margin-left: @mp-b;
        background: @primary;
        cursor: default;
        span {
          padding: 10px 12px 11px 12px;
          color: @black;
        }
      }
      &:last-child {
        .menu_input {
          color: @black;
        }
      }
    }
  }

  .swipper-wrapper {
    width: 100%;
  }
</style>
