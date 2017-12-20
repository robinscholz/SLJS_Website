import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'underscore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    apidata: [],
    topScroll: 0,
    caption: false,
    showCollection: false,
    shiver: false,
    animations: _.shuffle(['shakeone', 'shaketwo', 'shakethree', 'shakefour', 'shakefive', 'shakesix', 'shakeseven', 'shakeeight', 'shakenine'])
  },
  actions: {
    // Get API Data
    LOAD_DATASET: function ({ commit }) {
      return axios.get('/cms/api/data').then((response) => {
        commit('SET_DATASET', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  // Set API Data
  mutations: {
    SET_DATASET: (state, { list }) => {
      state.apidata = list
    },
    SAVE_SCROLL (state, topScroll) {
      state.topScroll = topScroll
    },
    SHOW_CAPTIONS (state, caption) {
      state.caption = caption
    },
    SHOW_COLLECTIONS (state, showCollection) {
      state.showCollection = showCollection
    },
    SHIVER (state, shiver) {
      state.shiver = shiver
    },
    SHUFFLE_ANIMATIONS (state) {
      state.animations = _.shuffle(state.animations)
    }
  }
})

export default store
