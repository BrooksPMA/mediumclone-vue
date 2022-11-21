import commentsApi from '@/api/comments'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getCommentsStart: '[comments] Get comments start',
  getCommentsSuccess: '[comments] Get comments success',
  getCommentsFailure: '[comments] Get comments failure',

  deleteCommentStart: '[comments] Delete comment start',
  deleteCommentSuccess: '[comments] Delete comment success',
  deleteCommentFailure: '[comments] Delete comment failure',
}

export const actionTypes = {
  getComments: '[comments] Get comments',
  deleteComment: '[comments] Delete comment',
}

const mutations = {
  [mutationTypes.getCommentsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getCommentsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getCommentsFailure](state) {
    state.isLoading = false
  },
  [mutationTypes.deleteCommentStart]() {},
  [mutationTypes.deleteCommentSuccess]() {},
  [mutationTypes.deleteCommentFailure]() {},
}

const actions = {
  [actionTypes.getComments](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getCommentsStart)
      commentsApi
        .getComments(slug)
        .then((comments) => {
          context.commit(mutationTypes.getCommentsSuccess, comments)
          resolve(comments)
          console.log('comments are: ', comments)
        })
        .catch(() => {
          context.commit(mutationTypes.getCommentsFailure)
        })
    })
  },
  [actionTypes.deleteComment](context, {slug, id}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.deleteCommentStart)
      commentsApi
        .deleteComment(slug, id)
        .then(() => {
          context.commit(mutationTypes.deleteCommentSuccess)
          resolve()
        })
        .catch(() => {
          context.commit(mutationTypes.deleteCommentFailure)
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
