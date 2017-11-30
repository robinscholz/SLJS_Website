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
  </swiper>
</template>

<script>
  import NameWidget from '../library/NameWidget.vue'

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
          // loop: true,
          mousewheelControl: true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
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
        return this.apidata['2-collections']
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
    }
    &_btn {
      display: inline-block;
      margin: 0 @mp-a;
      background: @secondary;
      border-radius: 3px;
      &:first-child {
        margin-left: @mp-b;
        background: @tertiary;
      }
      &:last-child {
        margin-right: @mp-b;
      }
    }
    &_input {
      display: inline-block;
      cursor: pointer;
      padding: 10px 10px 9px 10px;
      .fs-s;
      color: @primary;
      text-decoration: none;
      // input {
      //   appearance: none;
      // }
      // label {
      //   cursor: pointer;
      //   display: inline;
      //   padding-right: 9px;
      // }
      &.router-link-active {
        color: @black;
        background: @primary;
        border-radius: 3px;
      }
    }
  }

  .swipper-wrapper {
    width: 100%;
  }
</style>
