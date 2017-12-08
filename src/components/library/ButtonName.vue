<template>
    <span>{{ fullname }}</span>
</template>

<script>
  export default {
    name: 'ButtonName',
    data () {
      return {
        fullname: 'Simon Skatka Lindell'
      }
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  span {
    padding: @mp-a;
    text-transform: uppercase; 
    .white;
    background: @black;
    cursor: default;
    &:hover {
      background: @black;
    }
  }
</style>
