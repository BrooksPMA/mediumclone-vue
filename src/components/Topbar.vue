<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'globalFeed'}"
          >MediumClone</router-link
        >
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'globalFeed'}"
              active-class="active"
              exact
            >
              <!-- active class, exact не в роутере -->
              Home
            </router-link>
          </li>

          <template v-if="isAnonymous">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'login'}">
                Sign in
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'register'}">
                Sign up
              </router-link>
            </li>
          </template>

          <template v-if="isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'createArticle'}">
                <i class="ion-compose" />
                &nbsp; New Article
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'settings'}">
                <i class="ion-gear-a" />
                &nbsp; Settings
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{
                  name: 'userProfile',
                  params: {slug: currentUser.username},
                }"
              >
                <img class="user-pic" :src="currentUser.image" />
                &nbsp;
                {{ currentUser.username }}
              </router-link>
            </li></template
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {getterTypes} from '@/store/modules/auth'
import {mapGetters} from 'vuex'
export default {
  name: 'McvTopbar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
}
</script>

<style></style>
