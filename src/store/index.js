import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view: 'Film',
    theme: 'light',
    site: 'zuidazy',
    detail: {
      show: false,
      key: '',
      info: {}
    },
    share: {
      show: false,
      key: '',
      info: {}
    },
    video: {
      key: '',
      info: {}
    }
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
    },
    getDetail: state => {
      return state.detail
    },
    getShare: state => {
      return state.share
    },
    getVideo: state => {
      return state.video
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
    },
    SET_DETAIL: (state, payload) => {
      state.detail = payload
    },
    SET_SHARE: (state, payload) => {
      state.share = payload
    },
    SET_VIDEO: (state, payload) => {
      state.video = payload
    }
  }
})
