import Vue from 'vue'
import Vuex from 'vuex'

import module_user from './modules/user'
import module_streams from './modules/streams'
import module_games from './modules/games'
import module_users_request from './modules/usersRequest'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        user: module_user,
        streams: module_streams,
        games: module_games,
        usersRequest: module_users_request
    }
})
