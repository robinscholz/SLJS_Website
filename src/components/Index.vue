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
        // idleStatus: false,
        // pageNumber: -1,
        topScroll: 0
        // idleNumOne: 0,
        // idleNumTwo: 0
      }
    },
    // onIdle () {
    //   this.idleStatus = true
    //   // this.start()
    // },
    // onActive () {
    //   this.stop()
    // },
    methods: {
      ...mapMutations([
        'SAVE_SCROLL',
        'SHOW_CAPTIONS',
        'SHIVER'
      ]),
      // start () {
      //   this.interval = setInterval(function () {
      //     this.idleNumOne = Math.floor(Math.random() * this.imgnum) + 1
      //     this.idleNumTwo = Math.floor(Math.random() * 8)
      //   }.bind(this), 10000)
      // },
      // stop () {
      //   clearInterval(this.interval)
      // },
      scrollWatch () {
        this.topScroll = window.pageYOffset || document.documentElement.scrollTop
        this.SAVE_SCROLL(this.topScroll)
      }
    },
    watch: {
      // idleStatus () {
      //   if (this.idleStatus) {
      //     this.start()
      //   } else {
      //     this.stop()
      //   }
      // }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollWatch)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollWatch)
    }
  }
</script>

<style lang="less">
  @import "../less/global.less";
</style>
