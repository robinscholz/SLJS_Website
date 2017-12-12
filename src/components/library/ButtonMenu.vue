<template>
  <ul class="menu_slider" :options="swiperOption" ref="mySwiper">
    <li class="menu_btn" v-for="collection in collections" :key="collection.uid" v-if="collection.uid === index">
      <span :to="{ path: collection.uid }" class="menu_input">
        {{ collection.title }}
      </span>
    </li>
    <li class="menu_btn" v-for="collection in collections" :key="collection.uid" v-if="collection.uid !== index && $store.state.showCollection">
      <router-link :to="{ path: collection.uid }" class="menu_input">
        {{ collection.title }}
      </router-link>
    </li>
    <li class="menu_btn">
      <ButtonShow></ButtonShow>  
    </li>
    <li class="menu_btn">
      <ButtonCaption></ButtonCaption>  
    </li>
    <li class="menu_btn">
      <router-link to="contact" class="menu_input menu_contact">Contact & CV</router-link>    
    </li>
  </ul>
</template>

<script>
  import ButtonName from '../library/ButtonName.vue'
  import ButtonCaption from '../library/ButtonCaption.vue'
  import ButtonShow from '../library/ButtonShow.vue'

  import _ from 'underscore'
  import { mapMutations } from 'vuex'

  export default {
    name: 'ButtonMenu',
    props: ['index'],
    data () {
      return {
        swiperOption: {
          freeMode: true,
          slidesPerView: 'auto',
          initialSlide: this.initialSlideNumber,
          grabCursor: true,
          mousewheelControl: false
        }
      }
    },
    components: {
      ButtonName,
      ButtonCaption,
      ButtonShow
    },
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      collections () {
        return _.sortBy(this.apidata['2-collections'], 'number')
      },
      initialSlideNumber () {
        return parseInt(this.collections[this.index].number)
      }
    },
    methods: {
      ...mapMutations([
        'SHOW_CAPTIONS'
      ])
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";

  .menu {
    &_slider {
      position: fixed;
      width: 100vw;
      top: @mp-b;
      left: 0;
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0;
      z-index: 90;
    }
    &_btn {
      display: inline-block;
      margin: 0 @mp-a;
      letter-spacing: 0.4px;
      &:first-child {
        margin-left: @mp-b;
        cursor: default;
      }
    }
    &_input {
      display: inline-block;
      cursor: pointer;
      padding: @mp-a;
      .fs-s;
      .black;
      background: @primary;
      text-decoration: none;
      .br;
      &:hover {
        background: @white;
      }
      &.router-link-active {
        background: @secondary;
      }
    }
    &_contact {
      background: @black;
      .white;
      &:hover {
        background: @blacklight;
      }
      &.router-link-active {
        background: @black;
      }
    }
  }

  .swipper-wrapper {
    width: 100%;
  }
</style>
