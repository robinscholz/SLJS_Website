<template>
  <div class="main_wrapper" v-if="apidata.length !== 0">
    <ButtonMenu :index=index></ButtonMenu>
    <IndexMasonry :index=index></IndexMasonry>
  </div>
</template>

<script>
  import ButtonMenu from './library/ButtonMenu.vue'
  import IndexMasonry from './library/IndexMasonry.vue'
  import { mapMutations } from 'vuex'
  import _ from 'underscore'

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
        return _.values(this.apidata['2-collections'])
      },
      misc () {
        return this.apidata['3-misc']
      }
    },
    data () {
      return {
        idleStatus: 'idleActive',
        pageNumber: -1,
        topScroll: 0
      }
    },
    onIdle () {
      this.idleStatus = 'idle'
    },
    onActive () {
      this.idleStatus = 'idleActive'
    },
    methods: {
      ...mapMutations([
        'SAVE_SCROLL'
      ]),
      start () {
        this.interval = setInterval(function () {
          if (this.pageNumber === this.misc.total - 1) {
            this.pageNumber = 0
          } else {
            this.pageNumber++
          }
        }.bind(this), 7500000)
      },
      stop () {
        clearInterval(this.interval)
      },
      scrollWatch () {
        this.topScroll = window.pageYOffset || document.documentElement.scrollTop
        console.log(this.topScroll)
        this.SAVE_SCROLL(this.topScroll)
      }
    },
    watch: {
      idleStatus () {
        if (this.idleStatus === 'idle') {
          this.start()
        } else {
          this.stop()
        }
      },
      pageNumber () {
        var currentUid = this.collections[this.pageNumber].uid
        this.$router.push(currentUid)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollWatch)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollWatch)
    }
    // beforeDestroy () {
    //   this.SAVE_SCROLL(this.topScroll)
    // }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
