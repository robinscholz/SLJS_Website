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
      collectionsArray () {
        return Object.values(this.collections)
      },
      misc () {
        return this.apidata['3-misc']
      },
      id () {
        return this.collections.number
      }
    },
    data () {
      return {
        idleStatus: 'idleActive',
        pageNumber: -1
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
        this.interval = setInterval(function () {
          if (this.pageNumber === this.misc.total - 1) {
            this.pageNumber = 0
          } else {
            this.pageNumber++
          }
        }.bind(this), 7500)
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
        var collectionsArray = Object.values(this.collections)
        var currentUid = collectionsArray[this.pageNumber].uid
        this.$router.push(currentUid)
      }
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
