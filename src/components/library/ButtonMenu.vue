<template>
  <swiper class="menu_slider" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide class="menu_btn" v-for="collection in collections">
      <span class="menu_input">
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
    <swiper-slide class="menu_btn" v-for="collection in collections">
      <span class="menu_input">
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
    <swiper-slide class="menu_btn" v-for="collection in collections">
      <span class="menu_input">
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

  export default {
    name: 'ButtonMenu',
    data () {
      return {
        // notNextTick: true,
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

  .menu {
    &_slider {
      position: fixed;
      width: 100vw;
      top: @mp-b;
      left: 0;
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
    }
    &_btn {
      display: inline;
      margin: 0 @mp-a;
      &:first-child {
        margin-left: @mp-b;
      }
      &:last-child {
        margin-right: @mp-c;
      }
    }
    &_input {
      display: inline-block;
      cursor: pointer;
      padding: 6px 12px 5px 5px;
      background: @white;
      border-radius: 5px;
      border: solid 1px @midgrey;
      .fs-m;
      letter-spacing: 1px;
      input {
        appearance: none;
      }
      label {
        cursor: pointer;
        display: inline;
      }
    }
  }

  .swipper-wrapper {
    width: 100%;
  }
</style>
