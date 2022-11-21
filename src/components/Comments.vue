<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <h3>comment input</h3>
      <div v-if="comments" class="container">
        <div class="card" v-for="comment in comments" :key="comment.id">
          <div class="card-block">
            <p class="card-text">
              {{ comment.body }}
            </p>
          </div>
          <div class="card-footer">
            <router-link
              class="comment-author"
              :to="{
                name: 'userProfile',
                params: {slug: comment.author.username},
              }"
            >
              <img :src="comment.author.image" class="comment-author-img" />
            </router-link>
            &nbsp;
            <router-link
              class="comment-author"
              :to="{
                name: 'userProfile',
                params: {slug: comment.author.username},
              }"
            >
              {{ comment.author.username }}
            </router-link>
            <span class="date-posted">{{
              new Date(comment.createdAt).toLocaleDateString()
            }}</span>
            <span
              class="mod-options"
              v-if="currentUser.username === comment.author.username"
            >
              <i class="ion-trash-a" @click="deleteComment(comment.id)"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes as commentsActionTypes} from '@/store/modules/comments'
import {mapState, mapGetters} from 'vuex'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'

export default {
  name: 'McvArticleComments',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: state => state.comments.isLoading,
      comments: state => state.comments.data,
      error: state => state.comments.error,
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser,
    }),
  },
  mounted() {
    this.$store.dispatch(commentsActionTypes.getComments, {slug: this.slug})
  },
  methods: {
    deleteComment(idx) {
      this.$store
        .dispatch(commentsActionTypes.deleteComment, {
          slug: this.slug,
          id: idx,
        })
        .then(() => {
          this.$store.dispatch(commentsActionTypes.getComments, {
            slug: this.slug,
          })
        })
    },
  },
}
</script>

<style></style>
