import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: {
      lista: [],
      errores: [],
      loading: true,
      offset: 0,
      page: 1,
      count: 25
    },
    counter: 0,
    token: null
  },
  mutations: {
    addOne(state) {
			state.counter += 1;
		},
		addNumber(state, payload) {
			state.counter += payload.valor;
    },
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    }
  },
  actions: {

  },
  getters: {
    twice: state => state.counter * 2
  }
})
