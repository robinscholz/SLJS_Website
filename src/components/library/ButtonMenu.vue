<template>
  <div class="menu_wrapper" v-if="apidata.length !== 0">
    <swiper 
      class="menu_slider" 
      :options="swiperOption" 
      ref="mySwiper" 
      :class="{absolute: isContact}"
    >
      <swiper-slide class="menu_btn">
        <router-link to="contact" class="menu_input menu_contact">
          <ButtonName></ButtonName>
        </router-link>    
      </swiper-slide>
      <swiper-slide v-if="showMenuButton" class="menu_btn_ext">
        <span class="menu_input menu_arrow">
          Scroll <span>&rarr;</span>
        </span>    
      </swiper-slide>
      <swiper-slide class="menu_btn menu_links">
        <router-link 
          :to="{ path: collection.uid }" 
          class="menu_input" 
          v-for="collection in collections"
          :key="collection.uid" 
          v-if="collection.uid === index || $store.state.showCollection || $route.name === 'Contact'"
          v-on:click.native="SHUFFLE_ANIMATIONS()"
        >
          {{ collection.title }}
        </router-link>
      </swiper-slide>
      <swiper-slide class="menu_btn">
        <ButtonShow></ButtonShow>  
      </swiper-slide>
      <swiper-slide class="menu_btn">
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
        showMenuButton: false
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
      },
      isContact () {
        return this.$route.name === 'Contact'
      }
    },
    methods: {
      ...mapMutations([
        'SHOW_CAPTIONS',
        'SHOW_COLLECTIONS',
        'SHIVER',
        'SHUFFLE_ANIMATIONS'
      ]),
      visibilityChangedRight (isVisible, entry) {
        this.isVisibleRight = !entry.isIntersecting
      },
      visibilityChangedLeft (isVisible, entry) {
        this.isVisibleLeft = !entry.isIntersecting
      },
      menuWidth () {
        const menuItems = document.getElementsByClassName('menu_btn')
        const windowWidth = (window ? window.innerWidth : null)
        let menuWidth = 20 // outside margin
        for (let i = 0; i < menuItems.length; i++) {
          menuWidth += (menuItems[i].offsetWidth + 20) // + margins
        }
        if (menuWidth > windowWidth) {
          this.showMenuButton = true
        } else {
          this.showMenuButton = false
        }
      }
    },
    mounted () {
      this.menuWidth()
      if (window) {
        window.addEventListener('resize', this.menuWidth)
      }
    },
    updated () {
      this.menuWidth()
    }
  }
</script>
  
<style lang="less">
  @import "../../less/global.less";

  .menu {
    &_slider {
      position: fixed;
      width: 100vw;
      left: 0;
      top: 0;
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
      font-size: 0;
      z-index: 99;
      padding: @mp-b 0;
      &.absolute {
        position: absolute;
      }
    }
    &_btn {
      display: inline-block;
      margin: 0 @mp-a/1.5;
      &:first-child {
        margin-left: @mp-b;
        cursor: default;
      }
      &:last-child {
        margin-right: @mp-b;
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
    &_btn_ext {
      display: inline-block;
      margin: 0 @mp-a/1.5;
      background: none;
    }
    &_input {
      display: inline-block;
      cursor: pointer;
      text-transform: uppercase; 
      padding: 8px 8px 6px 8px;
      .fs-m;
      // .br;
      background: @primary;
      text-decoration: none;
      &:hover {
        background: @white;
      }
      &.router-link-active {
        background: @blue;
        color: @yellow;
      }
    }
    &_contact {
      background: @primary;
      .br;
      &:hover {
        background: @white;
      }
      &.router-link-active {
        background: @blue;
        color: @yellow;
      }
    }
    &_arrow {
      background: orangered;
      .white;
      .br;
      cursor: inherit;
      &:hover {
        background: orangered;
      }
      span {
        float: right;
        margin: 2px 0 -2px 5px;
      }
    }
  }
</style>
