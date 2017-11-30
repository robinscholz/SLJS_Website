<template>
    <span v-on:click="log()">{{ fullname }}</span>
</template>

<script>
  export default {
    name: 'NameWidget',
    data () {
      return {
        fullname: 'Simon Skatka Lindell'
      }
    },
    methods: {
      updateName () {
        this.index = (this.index + 1) % (this.fullname.length)
      },
      log () {
        console.log('clicked')
      }
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  span {
    padding: 10px 10px 10px 10px;
    text-transform: uppercase; 
    color: @black;
  }
</style>
