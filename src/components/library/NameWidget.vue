<template>
    <span>{{ fullname[index] }}</span>
</template>

<script>
  export default {
    name: 'NameWidget',
    data () {
      return {
        // fullname: ['Simon Lars Julius', 'Skatka Lindell'],
        fullname: ['Simon Skatka Lindell'],
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

  span {
    padding: 10px 12px 9px 12px;
    text-transform: uppercase; 
    color: @black;
  }
</style>
