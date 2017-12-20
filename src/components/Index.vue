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
      collection () {
        return this.apidata['2-collections'][this.index]
      },
      contact () {
        return this.apidata['1-contact']
      },
      misc () {
        return this.apidata['3-misc']
      }
    },
    data () {
      return {
        topScroll: 0
      }
    },
    metaInfo () {
      // Check if data is loaded
      if (this.apidata.length !== 0) {
        return {
          title: this.contact.title + ': ' + this.collection.title,
          meta: [
            // Facebook / Open Graph
            { property: 'og:title', content: this.contact.title + ': ' + this.collection.title },
            { property: 'og:image', content: this.collection.images[1].url }
          ],
          link: [
            { rel: 'image_src', href: this.collection.images[1].url }
          ]
        }
      } else {
        return {
          title: ''
        }
      }
    },
    methods: {
      ...mapMutations([
        'SAVE_SCROLL',
        'SHOW_CAPTIONS',
        'SHIVER'
      ]),
      scrollWatch () {
        this.topScroll = window.pageYOffset || document.documentElement.scrollTop
        this.SAVE_SCROLL(this.topScroll)
      }
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
