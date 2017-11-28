<template>
  <div class="screensaver_wrapper" v-on:click="increment">
      <img v-for="thumb in collections[counter].thumbs" :src="thumb.url">
  </div>    
</template>

<script>
  export default {
    name: 'CycleScreensaver',
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return this.apidata['2-collections']
      },
      misc () {
        return this.apidata['3-misc']
      },
      collectionsLength () {
        return Object.keys(this.collections).length
      }
    },
    data () {
      return {
        counter: this.$store.state.picked,
        idleStatus: 'idle'
      }
    },
    onIdle () {
      this.idleStatus = 'idle'
    },
    onActive () {
      this.idleStatus = 'active'
    },
    methods: {
      increment () {
        if (this.counter < this.collectionsLength) {
          this.counter += 1
        } else {
          this.counter = 0
        }
      }
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";

  .screensaver_wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    img {
      width: calc(~"100% / 7");
      vertical-align: top;
    }
  }

</style>
