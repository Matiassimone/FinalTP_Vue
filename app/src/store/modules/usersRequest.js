import { getUserInformationByName } from '../../services/api/apiCalls'

const module_users_request = ({
    
  state: {
    users: [],
    loading: true,
    errors: []
  },

  namespaced: true,

  mutations: {
    SUCCESS_FETCH(state, res){
      state.loading = false;
      state.users = res.data
    },

    FAILURE_FETCH(state, err){
      state.loading = false;
      state.errors = err;
    },

    BEGIN_FETCH(state){
      state.loading = true;
    }
  },

  actions: {
    BEGIN_FETCH_USERS_REQUEST({commit}, userName) {

      commit('BEGIN_FETCH')

      getUserInformationByName( userName )
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

export default module_users_request;