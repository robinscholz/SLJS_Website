<template>
  <span>{{ name }}</span>    
</template>

<script>
  export default {
    name: 'ButtonName',
    data () {
      return {
        name: 'Simon Skatka Lindell'
      }
    },
    methods: {
      reCalculate: function () {
        const windowWidth = (window ? window.innerWidth : null)
        this.name = windowWidth <= 768 ? '?' : 'Simon Skatka Lindell'
      }
    },
    mounted () {
      this.reCalculate()
      if (window) {
        window.addEventListener('resize', this.reCalculate)
      }
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";
</style>
