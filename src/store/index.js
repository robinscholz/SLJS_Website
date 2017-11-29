import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    apidata: []
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
    // Picked
    // UPDATE_PICKED ({ commit }, picked) {
    //   commit('SET_PICKED', picked)
    // }
  },
  // Set API Data
  mutations: {
    SET_DATASET: (state, { list }) => {
      state.apidata = list

      // Set Initial Collection
      // var rightNow = new Date()
      // var formatted = rightNow.toISOString().slice(0, 15).replace(/-/g, '').replace(/T/g, '').replace(/:/g, '')
      // var curr = formatted % state.apidata['3-misc'].total + 1
      // state.picked = curr
    },
    // Filter
    SET_PICKED (state, picked) {
      state.picked = picked
    }
  }
})
export default store
