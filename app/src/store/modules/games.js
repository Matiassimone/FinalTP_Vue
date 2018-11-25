import getTopGames from '../../services/api/apiCalls'

const module_games = ({
    
  state: {
    data: [],
    pagination: "",
    errors: [],
    loading: true
  },

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
    }
  },

  actions: {
    BEGIN_FETCH_GAMES({commit}, cant, cursor) {
      state.loading = true;

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