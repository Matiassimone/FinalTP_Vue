import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'
import Login from './views/Login.vue'
import StreamsByGames from './views/StreamsByGames.vue'
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

    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== "login") {
    if (!store.state.token) {
      next("/");
    } else {
      next();
    }
  } else {
    if (store.state.token) {
      next("/home")
    } else {
      next();
    }
  }
})
export default router
