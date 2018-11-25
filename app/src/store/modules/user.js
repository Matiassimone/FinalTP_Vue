import getUserInformation from '../../services/api/apiCalls'

const module_user = ({
    
  state: {
    user: {
        displayName: "",
        id: "",
        name: "",
        type: "",
        bio: "",
        logo: "",
        email: "",
        emailVerified: false,
        partnered: false
    },
    accessToken: "",
    loading: true,
    errors: []
  },

  mutations: {
    SUCCESS_FETCH(state, res){
      state.loading = false;

      state.user = {
        displayName: res.display_name,
        id: res._id,
        name: res.name,
        type: res.type,
        bio: res.bio,
        logo: res.logo,
        email: res.email,
        emailVerified: res.email_verified,
        partnered: res.partnered
      }
      state.accessToken = res.accessToken
    },

    FAILURE_FETCH(state, err){
      state.loading = false;
      state.errors = err;
      //Function handle error
      console.log("Ups, something bad has happened:   " + err)
    }
  },

  actions: {
    BEGIN_FETCH_USER({commit}, userID) {
      state.loading = true;

      getUserInformation(userID)
        .then(
          (res) => commit('SUCCESS_FETCH', res)
        )
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    }
  },

  getters: {
    getToken: (state) => {
      return state.accessToken
    },

    getUser: (state) => {
      return state.user
    }
  }
})

export default module_user;