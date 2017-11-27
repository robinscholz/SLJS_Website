<template>
  <div class="menu_wrapper">
    <div v-for="collection in collections" class="menu_input">
    <label for="collection.title">
      <input 
        type="radio" 
        name="radio"
        :id="collection.title" 
        :value="collection.number" 
        v-model="$store.state.picked"
        @input="window.scrollTop()"
      >
      <span>{{ collection.title }}</span>
    </label>
    </div>
  </div>
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
      ...mapActions(['UPDATE_PICKED'])
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";

  .menu {
    &_wrapper {
      position: fixed;
      top: 10px;
      left: @mp-a;
    }
    &_input {
      display: inline-block;
      input {

      }
    }
  }
</style>
