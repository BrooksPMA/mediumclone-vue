<template>
  <button
    @click="handleLike"
    :class="{
      btn: true,
      'btn-sm': true,
      'btn-primary': isFavoritedOptimistic,
      'btn-outline-primary': !isFavoritedOptimistic,
    }"
    :disabled="disabled"
  >
    <i class="ion-heart" />
    <span>&nbsp; {{ favoritesCountOptimistic }}</span>
  </button>
</template>

<script>
import {actionTypes} from '@/store/modules/addToFavorites'
export default {
  name: 'McvAddToFavorites',
  props: {
    isFavorited: {
      type: Boolean,
      required: true,
    },
    articleSlug: {
      type: String,
      required: true,
    },
    favoritesCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isFavoritedOptimistic: this.isFavorited,
      favoritesCountOptimistic: this.favoritesCount,
      buttonClicks: 0,
      disabled: false,
    }
  },
  methods: {
    handleLike() {
      this.$store.dispatch(actionTypes.addToFavorites, {
        slug: this.articleSlug,
        isFavorited: this.isFavoritedOptimistic,
      })
      if (this.isFavoritedOptimistic) {
        this.favoritesCountOptimistic--
      } else {
        this.favoritesCountOptimistic++
      }
      this.isFavoritedOptimistic = !this.isFavoritedOptimistic
      this.blockSpamClickings()
    },
    blockSpamClickings() {
      ++this.buttonClicks === 10 ? this.delay() : null
    },
    delay() {
      alert('You are clicking too fast. Try again in 10 seconds.')
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 10000)
      this.buttonClicks = 0
    },
  },
}
</script>
