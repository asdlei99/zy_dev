import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view: 'Film',
    theme: 'light',
    site: 'zuidazy'
  },
  getters: {
    getView: state => {
      return state.view
    },
    getTheme: state => {
      return state.theme
    },
    getSite: state => {
      return state.site
    }
  },
  mutations: {
    SET_VIEW: (state, payload) => {
      state.view = payload
    },
    SET_THEME: (state, payload) => {
      state.theme = payload
    },
    SET_SITE: (state, payload) => {
      state.site = payload
    }
  }
})
