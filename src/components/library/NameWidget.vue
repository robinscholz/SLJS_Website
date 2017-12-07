<template>
    <span>{{ fullname }}</span>
</template>

<script>
  export default {
    name: 'NameWidget',
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
    padding: 10px 10px 10px 10px;
    text-transform: uppercase; 
    .white;
  }
</style>
