<template>
    <li class="menu_input">{{ fullname[index] }}</li>
</template>

<script>
  export default {
    name: 'NameWidget',
    data () {
      return {
        fullname: ['SLJ Skatka Lindell'],
        index: 0
      }
    },
    methods: {
      updateName () {
        this.index = (this.index + 1) % (this.fullname.length)
      }
    },
    mounted () {
      setInterval(this.updateName, 1200)
    }
  }
</script>
  
<style lang="less" scoped>
  @import "../../less/global.less";

  li {
    // width: 120px;
  }
</style>
