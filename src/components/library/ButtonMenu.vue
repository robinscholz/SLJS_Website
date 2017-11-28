<template>
  <swiper class="menu_slider" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide class="menu_btn">
      <NameWidget class="menu_input"></NameWidget>    
    </swiper-slide>
    <swiper-slide class="menu_btn" v-for="collection in collections" :key="collection.title">
      <span class="menu_input md-primary" :class="{active: collection.number == $store.state.picked}">
        <input 
          type="radio" 
          :name="collection.title"
          :id="collection.title"
          :value="collection.number" 
          v-model="$store.state.picked"
        >
        <label :for="collection.title" v-on:click="scrollTop">{{ collection.title }}</label>
      </span>
    </swiper-slide>
  </swiper>
</template>

<script>
  import _ from 'underscore'
  import { mapActions } from 'vuex'
  import NameWidget from '../library/NameWidget.vue'

  export default {
    name: 'ButtonMenu',
    data () {
      return {
        swiperOption: {
          freeMode: true,
          slidesPerView: 'auto',
          initialSlide: this.$store.state.picked,
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
      titles () {
        var titles = _.pluck(this.collections, 'title')
        return titles
      }
    },
    methods: {
      ...mapActions(['UPDATE_PICKED']),
      scrollTop: function () {
        scroll(0, 0)
      }
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";
  // @import 'vue-material/dist/vue-material.min.css'

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
      padding: 10px 3px 9px 8px;
      .fs-m;
      color: @primary;
      input {
        appearance: none;
      }
      label {
        cursor: pointer;
        display: inline;
        padding-right: 9px;
      }
      &.active {
        color: @black;
        background: @primary;
      }
    }
  }

  .swipper-wrapper {
    width: 100%;
  }
</style>
