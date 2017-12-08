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
      padding: 12px;
      .fs-m;
      text-decoration: none;
      color: @black;
      &.router-link-active {
        background: @secondary;
        border-radius: 3px;
      }
    }
    &_btn {
      display: inline-block;
      margin: 0 @mp-a;
      background: @primary;
      border-radius: 3px;
      &:first-child {
        margin-left: @mp-b;
        background: @black;
      }
      &:last-child {
        margin-right: @mp-b;
        background: @black;
        // padding: 2px;
        .menu_input {
          .white;
        }
      }
    }
  }

  .swipper-wrapper {
    width: 100%;
  }
</style>
