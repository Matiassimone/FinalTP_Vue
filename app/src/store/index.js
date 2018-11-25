import Vue from 'vue'
import Vuex from 'vuex'

import module_user from './modules/user'
import module_streams from './modules/streams'
import module_games from './modules/games'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        user: module_user,
        streams: module_streams,
        games: module_games
    }
})
