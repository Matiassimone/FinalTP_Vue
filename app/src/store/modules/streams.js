import { getStreamByUserId } from '../../services/api/apiCalls'
import { getStreamByGameId } from '../../services/api/apiCalls'
import { getTopStreams } from '../../services/api/apiCalls'

const module_streams = ({

  state: {
    topStreams : {
      data: [],
      pagination: "",
      errors: [],
      loading: true
    },

    streamsByGameId : {
      data: [],
      pagination: "",
      errors: [],
      loading: true
    },

    streamByUserId : {
      data: [],
      pagination: "",
      errors: [],
      loading: true
    }
  },

  namespaced: true,

  mutations: {
    SUCCESS_FETCH_TOPSTREAMS(state, res){
      state.topStreams.loading = false;

      state.topStreams.data = res.data
      state.topStreams.pagination = res.pagination
    },

    SUCCESS_FETCH_STREAMSBYGAMEID(state, res){
      state.streamsByGameId.loading = false;

      state.streamsByGameId.data = res.data
      state.streamsByGameId.pagination = res.pagination
    },

    SUCCESS_FETCH_STREAMBYUSERID(state, res){
      state.streamByUserId.loading = false;

      state.streamByUserId.data = res.data
      state.streamByUserId.pagination = res.pagination
    },


    FAILURE_FETCH_TOPSTREAMS(state, err){
      state.topStreams.loading = false;
      state.topStreams.errors = err;
      //Function handle error
      console.log("Ups, something bad has happened:   " + err)
    },

    FAILURE_FETCH_STREAMSBYGAMEID(state, err){
      state.streamsByGameId.loading = false;
      state.streamsByGameId.errors = err
      //Function handle error
      console.log("Ups, something bad has happened:   " + err)
    },

    FAILURE_FETCH_STREAMBYUSERID(state, err){
      state.streamByUserId.loading = false;
      state.streamByUserId.errors = err;
      //Function handle error
      console.log("Ups, something bad has happened:   " + err)
    },

    BEGIN_FETCH_TOPSTREAMS(state){
      state.topStreams.loading = true;
    },
    BEGIN_FETCH_STREAMSBYGAMEID(state){
      state.streamsByGameId.loading = true;
    },
    BEGIN_FETCH_STREAMBYUSERID(state){
      state.streamByUserId.loading = true;
    }
  },

  actions: {
    BEGIN_FETCH_TOPSTREAMS({commit}, cant, cursor) {

      commit('BEGIN_FETCH_TOPSTREAMS')

      getTopStreams(cant, cursor)
        .then(
          (res) => commit('SUCCESS_FETCH_TOPSTREAMS', res)
        )
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    },

    BEGIN_FETCH_STREAMSBYGAMEID({commit}, gameID, cant, cursor) {

      commit('BEGIN_FETCH_STREAMSBYGAMEID')

      state.streamsByGameId.loading = true;

      getStreamByGameId(gameID, cant, cursor)
        .then(
          (res) => commit('SUCCESS_FETCH_STREAMSBYGAMEID', res)
        )
        .catch(
          (err) => commit('FAILURE_FETCH', err)
        )
    },

    BEGIN_FETCH_STREAMBYUSERID({commit}, userID) {

      commit('BEGIN_FETCH_STREAMBYUSERID')

      state.streamByUserId.loading = true;

      getStreamByUserId(userID)
        .then(
          (res) => commit('SUCCESS_FETCH_STREAMBYUSERID', res)
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

export default module_streams;