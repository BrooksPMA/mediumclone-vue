<template>
  <mcv-article-form
    :initial-values="initialValues"
    :errors="validationErrors"
    :is-submitting="isSubmitting"
    @articleSubmit="onSubmit"
  ></mcv-article-form>
</template>

<script>
import McvArticleForm from '@/components/ArticleForm.vue'
import {actionTypes} from '@/store/modules/createArticle'
import {mapState} from 'vuex'
export default {
  components: {McvArticleForm},
  name: 'McvCreateArticle',
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.createArticle.isSubmitting,
      validationErrors: state => state.createArticle.validationErrors,
    }),
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
        .dispatch(actionTypes.createArticle, {articleInput})
        .then(article => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    },
  },
}
</script>

<style></style>
