import { getTopGames, getGameByName, getGameById } from '../../services/api/apiCalls'

const module_games = ({

  state: {
    data: [],
    pagination: "",
    errors: [],
    loading: true
  },

  namespaced: true,

  mutations: {
    SUCCESS_FETCH(state, res) {
      state.loading = false;

      state.data = res.data;
      state.pagination = res.pagination;
    },

    SUCCESS_FETCH_ADDING_MORE(state, res) {
      let newData = res.data;
      
      state.data.push.apply(state.data, newData);     
      state.pagination = res.pagination;
      state.loading = false;
    },

    FAILURE_FETCH(state, err) {
      state.loading = false;
      state.errors = err;

      //Function handle error
      console.log("Ups, something bad has happened:   " + err)
    },

    BEGIN_FETCH(state) {
      state.loading = true;
    }
  },

  actions: {
    BEGIN_FETCH_GAMES({ commit }, cant, cursor) {

      commit('BEGIN_FETCH')

      getTopGames(cant, cursor)
        .then(
          (res) => {

            if (!cursor) {

              return commit('SUCCESS_FETCH', res)
            }
          })
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    },

    BEGIN_FECH_MORE_GAMES({ commit }, cursor) {

      commit('BEGIN_FETCH')

      getTopGames(50, cursor)
        .then(
          (res) => commit('SUCCESS_FETCH_ADDING_MORE', res)
        )
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    },

    BEGIN_FETCH_GAMES_BY_NAME({commit}, gameName){

      commit('BEGIN_FETCH')

      getGameByName(gameName)
        .then(
          (res) => commit('SUCCESS_FETCH', res)
        )
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    },

    BEGIN_FETCH_GAMES_BY_ID({commit}, gameId){

      commit('BEGIN_FETCH')

      getGameById( gameId )
        .then(
          (res) => commit('SUCCESS_FETCH', res)
        )
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    }
  },

  getters: {
    //Getters
  }
})

export default module_games;