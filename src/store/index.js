import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'
import article from './modules/article'
import comments from './modules/comments'
import createArticle from './modules/createArticle'
import editArticle from './modules/editArticle'
import settings from './modules/settings'
import addToFavorites from './modules/addToFavorites'
import userProfile from './modules/userProfile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    comments,
    createArticle,
    editArticle,
    settings,
    addToFavorites,
    userProfile,
  },
})
