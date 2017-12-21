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
        // this.name = windowWidth <= 600 ? 'Simon Lindell' : 'Simon Skatka Lindell'
        this.name = windowWidth >= 3000 ? 'Simon Lars Julius Skatka Lindell' : 'Simon Skatka Lindell' // Bonus
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
