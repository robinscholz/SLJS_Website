<template>
    <!-- <div class="name">{{ fullname[index] }}</div> -->
</template>

<script>
  export default {
    name: 'NameWidget',
    data () {
      return {
        fullname: ['Simon Lars Julius Skatka Lindell'],
        // fullname: ['Simon Skatka Lindell'],
        // fullname: ['Simon', 'Lars', 'Julius', 'Skatka', 'Lindell'],
        index: 0
      }
    },
    methods: {
      updateName () {
        this.index = (this.index + 1) % (this.fullname.length)
      }
    },
    mounted () {
      // setInterval(this.updateName, 1200)
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  .name {
    // font-family: 'Clip-Regular';
    // font-size: 6vw;
    line-height: 1;
    color: @lightgrey;
    // text-align: center;
    width: 100vw;
    position: fixed;
    top: @mp-a;
    left: @mp-a;
    // bottom: -3vw;
    // z-index: -1;
  }
</style>
