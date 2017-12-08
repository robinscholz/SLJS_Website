<template>
  <swiper class="menu_slider" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="menu_btn">
      <ButtonName class="menu_input"></ButtonName>    
    </swiper-slide>
    <swiper-slide class="menu_btn">
      <ButtonCaption></ButtonCaption>  
    </swiper-slide>
    <swiper-slide class="menu_btn" v-for="collection in collections" :key="collection.uid">
      <router-link :to="{ path: collection.uid }" class="menu_input">
        {{ collection.title }}
      </router-link>
    </swiper-slide>
    <swiper-slide class="menu_btn">
      <router-link to="contact" class="menu_input menu_contact">Contact & CV</router-link>    
    </swiper-slide>
  </swiper>
</template>

<script>
  import ButtonName from '../library/ButtonName.vue'
  import ButtonCaption from '../library/ButtonCaption.vue'

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
      ButtonCaption
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
      letter-spacing: 0.35px;
      &:first-child {
        margin-left: @mp-b;
        cursor: default;
      }
    }
    &_input {
      display: inline-block;
      cursor: pointer;
      padding: @mp-a;
      .fs-m;
      .black;
      background: @primary;
      text-decoration: none;
      border-radius: 5px;
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
