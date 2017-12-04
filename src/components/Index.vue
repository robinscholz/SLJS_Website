<template>
  <div class="main_wrapper" v-if="apidata.length !== 0">
    <ButtonMenu :index=index></ButtonMenu>
    <IndexMasonry :index=index></IndexMasonry>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'
  import IndexMasonry from './library/IndexMasonry.vue'

  export default {
    name: 'Index',
    components: {
      ButtonMenu,
      IndexMasonry
    },
    props: ['index'],
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return this.apidata['2-collections']
      },
      misc () {
        return this.apidata['3-misc']
      }
    },
    data () {
      return {
        idleStatus: 'idleActive',
        pageNumber: 0
      }
    },
    onIdle () {
      this.idleStatus = 'idle'
    },
    onActive () {
      this.idleStatus = 'idleActive'
    },
    methods: {
      start: function () {
        this.interval = setInterval(function () { this.pageNumber++ }.bind(this), 2000)
      },
      stop: function () {
        clearInterval(this.interval)
      }
    },
    watch: {
      idleStatus: function () {
        if (this.idleStatus === 'idle') {
          this.start()
        } else {
          this.stop()
        }
      },
      pageNumber: function () {
        console.log('redirect funtion here')
      }
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
