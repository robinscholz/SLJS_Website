<template>
  <!-- <ul class="menu_wrapper">
    <NameWidget></NameWidget>
    <li v-for="collection in collections" class="menu_input">
      <input 
        type="radio" 
        :name="collection.title"
        :id="collection.title"
        :value="collection.number" 
        v-model="$store.state.picked"
      >
      <label :for="collection.title" v-on:click="scrollTop">{{ collection.title }}</label>
    </li>
  </ul> -->
   <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import _ from 'underscore'
  import { mapActions } from 'vuex'

  export default {
    name: 'ButtonMenu',
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
    &_wrapper {
      position: fixed;
      width: 100vw;
      top: @mp-a;
      left: 0;
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
      text-align: right;
    }
    &_input {
      display: inline-block;
      margin: 0 @mp-a;
      cursor: pointer;
      .fs-m;
      text-shadow: 1px 1px 0px @white;
      letter-spacing: 1px;
      // .white;
      &:first-child {
        margin-left: @mp-b;
        margin-right: @mp-c;
      }
      &:last-child {
        margin-right: @mp-b;
      }
      input {
        appearance: none;
      }
      label {
        cursor: pointer;
        display: inline;
      }
    }
  }
</style>
