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
    accessToken: ""
  },
  
  mutations: {

    SUCCESS(res){
      state.user = {...state.user, 
        user: {
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
      }

      state.accessToken = {...state.accessToken,
        accessToken: res.accessToken}
    },

    FAILURE(err){
      //Function handle error
    }
  },
  actions: {
    BEGIN_FETCH_USER({commit}, userID) {
      getUserInformation(userID)
        .then(
          (res) => commit('SUCCESS', res)
        )
        .catch(
          (err) => commit('FAILURE', err)
        )
    }
  },
  getters: {

  }
})

export default module_user;