import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    apidata: []
  },
  actions: {
    // Get API Data
    LOAD_DATASET: function ({ commit }) {
      axios.get('/cms/api/data').then((response) => {
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
    }
  }
})
export default store
