import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'
import Login from './views/Login.vue'
import StreamsByGames from './views/StreamsByGames.vue'
import OneStream from './views/OneStream.vue'
import TopStreams from './views/TopStreams.vue'
import SearchResults from './views/SearchResults.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/streamsbygames',
      name: 'streamsbygames',
      component: StreamsByGames
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/onestream',
      name: 'onestream',
      component: OneStream
    },
    {
      path: '/topstreams',
      name: 'topstreams',
      component: TopStreams
    },
    {
      path: '/searchresults',
      name: 'searchresults',
      component: SearchResults
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== "login") {
    if (!store.state.user.accessToken) {
      next("/");
    } else {
      next();
    }
  }else{
    next();
  }
})

export default router
