import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    apidata: [],
    topScroll: 0,
    caption: false
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
    }
  }
})
export default store
