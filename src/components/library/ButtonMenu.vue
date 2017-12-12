<template>
  <div class="menu_wrapper">
    <swiper class="menu_slider" :options="swiperOption" ref="mySwiper" v-if="apidata.length !== 0">
      <swiper-slide v-if="isVisibleLeft || isVisibleRight" class="menu_btn" v-observe-visibility="visibilityChangedLeft">
        <span class="menu_input menu_arrow">
          Scroll &rarr; to see more  
        </span>    
      </swiper-slide>
      <swiper-slide class="menu_btn">
        <router-link to="contact" class="menu_input menu_contact">
          <ButtonName></ButtonName>
        </router-link>    
      </swiper-slide>
      <swiper-slide class="menu_btn">
        <router-link 
          :to="{ path: collection.uid }" 
          class="menu_input" 
          v-for="collection in collections"
          :key="collection.uid" 
          v-if="collection.uid === index || $store.state.showCollection || $route.name === 'Contact'"
          v-on:click.native="SHOW_COLLECTIONS()"
        >
          {{ collection.title }}
        </router-link>
      </swiper-slide>
      <swiper-slide class="menu_btn">
        <ButtonShow></ButtonShow>  
      </swiper-slide>
      <swiper-slide class="menu_btn" v-observe-visibility="visibilityChangedRight">
        <ButtonCaption></ButtonCaption>  
      </swiper-slide>
    </swiper>
    </div>
</template>

<script>
  import ButtonCaption from '../library/ButtonCaption.vue'
  import ButtonShow from '../library/ButtonShow.vue'
  import ButtonName from '../library/ButtonName.vue'
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
          mousewheelControl: true
        },
        isVisibleLeft: false,
        isVisibleRight: false
      }
    },
    components: {
      ButtonCaption,
      ButtonShow,
      ButtonName
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
        'SHOW_CAPTIONS',
        'SHOW_COLLECTIONS'
      ]),
      visibilityChangedRight (isVisible, entry) {
        this.isVisibleRight = !entry.isIntersecting
        console.log(this.isVisibleRight)
      },
      visibilityChangedLeft (isVisible, entry) {
        this.isVisibleLeft = !entry.isIntersecting
        console.log(this.isVisibleRight)
      }
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
      margin: 0 @mp-a/1.5;
      letter-spacing: 0.4px;
      &:first-child {
        margin-left: @mp-b*0.75;
        cursor: default;
      }
      &:last-child {
        margin-right: @mp-b*0.75;
        cursor: default;
      }
      a {
        margin: 0 @mp-a/1.5;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
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
        background: @blue;
        color: @yellow;
      }
    }
    &_contact {
      background: @black;
      .white;
      &:hover {
        background: @blacklight;
      }
      &.router-link-active {
        background: @blue;
        .black;
        color: @yellow;
      }
    }
    &_arrow {
      background: @black;
      .white;
      &:hover {
        background: @black;
      }
    }
  }

  .mobile_arrow {
    position: fixed;
    top: 76px;
    right: @mp-a;
    color: @black;
    text-align: right;
    z-index: 99;
    .fs-s;
  }

</style>
