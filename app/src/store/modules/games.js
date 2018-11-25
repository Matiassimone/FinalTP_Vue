import { getTopGames } from '../../services/api/apiCalls'

const module_games = ({
    
  state: {
    data: [],
    pagination: "",
    errors: [],
    loading: true
  },

  namespaced: true,

  mutations: {
    SUCCESS_FETCH(state, res){
      state.loading = false;

      state.data = res.data
      state.pagination = res.pagination
    },

    FAILURE_FETCH(state, err){
      state.loading = false;
      state.errors = err;
      //Function handle error
      console.log("Ups, something bad has happened:   " + err)
    },
    
    BEGIN_FETCH(state){
      state.loading = true;
    }
  },

  actions: {
    BEGIN_FETCH_GAMES({commit}, cant, cursor) { 

      commit('BEGIN_FETCH')

      getTopGames(cant, cursor)
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