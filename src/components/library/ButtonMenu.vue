<template>
  <ul class="menu_wrapper">
    <!-- <li class="menu_input">Simon Lars Julius Skatka Lindell</li> -->
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
  </ul>
</template>

<script>
  import _ from 'underscore'
  import { mapActions } from 'vuex'
  import NameWidget from '../library/NameWidget.vue'

  export default {
    name: 'ButtonMenu',
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

  .menu {
    &_wrapper {
      position: fixed;
      width: 100vw;
      top: @mp-c;
      left: 0;
      list-style-type:none;
      white-space:nowrap;
      overflow: hidden;
    }
    &_input {
      display: inline-block;
      margin: 0 @mp-a;
      cursor: pointer;
      border: solid 2px @yellow;
      padding: @mp-a 14px @mp-a 0;
      background-color: @lightgrey;
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 1px;
      &:first-child {
        margin-left: @mp-b;
        color: @lightgrey;
        // width: 120px;
        border: none;
        background: none;
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
