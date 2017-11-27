<template>
  <ul class="menu_wrapper">
    <li class="menu_input">Simon Lars Julius Skatka Lindell</li>
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

  export default {
    name: 'Button',
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
      top: @mp-b;
      left: 0;
      list-style-type:none;
      white-space:nowrap;
      overflow: hidden;
    }
    &_input {
      display: inline-block;
      margin: 0 @mp-a/2;
      padding: 8px 10px 8px 5px;
      border: solid 2px @black;
      border-radius: 10px;
      &:first-child {
        margin-left: @mp-b
      }
      &:last-child {
        margin-right: @mp-b;
      }
      input {
        appearance: none;

      }
    }
  }
</style>
