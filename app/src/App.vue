<template>
    <v-app>
        <v-toolbar light app id="toolbar">

            <!--Logo Field-->
            <router-link to="/">
                <figure>

                    <!--Logo text-->
                    <img src="../public/Zwitch.png">

                    <!--Logo SVG-->
                    <svg class="logo-FillColor" overflow="visible" width="30px" height="30px" viewBox="0 0 30 30" x="0px" y="0px">
                        <g>
                            <path d="M4,7 L5.56799,3 L27,3 L27,18 L21,24 L16,24 L12.88599,27 L9,27 L9,24 L4,24 L4,7 Z M21,20 L25,16 L25,5 L8,5 L8,20 L12,20 L12,23 L15,20 L21,20 Z"></path>
                            <g>
                                <polygon points="21 9 19 9 19 15 21 15"></polygon>
                                <polygon points="16 9 14 9 14 15 16 15"></polygon>
                            </g>
                        </g>
                    </svg>
                </figure>
            </router-link>

            <!--Links Field-->
            <v-toolbar-items>
                <v-btn flat><router-link to="/games" class="btn-nav">Games</router-link></v-btn> 
                <v-btn flat ><router-link to="/topstreams" class="btn-nav">Top</router-link></v-btn> 
            </v-toolbar-items>

            <!--Search Field-->
            <v-text-field v-if="this.accessToken"
                v-model="searchWord"
                hide-details
                prepend-icon="search"
                single-line
                placeholder="Search a user"
                @keyup.enter="submit"
            ></v-text-field>

            <!--Divider-->
            <v-divider
                class="mx-3"
                inset
                vertical
            ></v-divider>

            <!--User Field-->
            <div class="text-xs-center">

                <div v-if="accessToken">
                
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x>

                   <v-btn flat large
                        slot="activator"
                       >     
                        <!--User Pic-->
                        <v-list-tile-avatar>
                            <img :src="user.logo">
                        </v-list-tile-avatar>
                        <v-icon>details</v-icon>
                    </v-btn>
                    
                    <v-card>
                        <v-list>
                            <v-list-tile avatar>

                                <v-list-tile-content>
                                    <!--User Name-->
                                    <v-list-tile-title>{{user.displayName}}</v-list-tile-title>
                                    <!--User Email-->
                                    <v-list-tile-sub-title>{{user.email}}s</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-btn
                                        :class="fav ? 'red--text' : ''"
                                        icon
                                        @click="fav = !fav"
                                    >
                                        <!--User Icon Card-->
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>

                        <v-divider></v-divider>
                        <!--User Bio-->
                        <v-list>
                            <v-list-tile avatar>
                                <v-list-tile-content>

                                    <v-list-tile-title>Bio:</v-list-tile-title>
                                    <!--Bio-->
                                    <v-list-tile-sub-title>
                                        <div v-if="user.bio">
                                            <div>{{user.bio}}</div>
                                        </div>
                                        <div v-else>
                                            <div>Sorry! This user dont have description</div>
                                        </div>
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list>
                            <!--Switch Nocturne mode-->
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-switch v-model="message" color="primary"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable nocturne mode</v-list-tile-title>
                            </v-list-tile>
                        </v-list>

                        <!--Button Logout-->
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click="logout()">Logout</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
                </div>
                <div v-else>
                    <a :href="authServer+'auth/twitch'"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a>
                </div>
            </div>
        </v-toolbar>
        <router-view/>
    </v-app>
</template>

<script>
import  {AUTH_SERVER_URL}  from './services/api/apiUrls.js'
import { mapState } from 'vuex'

export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      searchWord:"",
      authServer: AUTH_SERVER_URL,
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  methods: {
      submit(event) {
          this.$router.push({ name: "searchresults", params: { searchWord: event.target.value} });          
      },
      logout(){
        window.location = AUTH_SERVER_URL + 'logout ' 
      }
  },
  computed: {
    ...mapState('user', ['user', 'errors', 'loading', 'accessToken'])
    
    
  },
  mounted() {
    this.$store.dispatch('user/BEGIN_FETCH_USER');
  }

};
</script>

<style>

figure:hover {
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}

@-webkit-keyframes swing {

    15% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
    }

    30% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    }

    50% {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
    }

    65% {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    }

    80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
    }

    100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    }
}

.logo-FillColor {
    fill: currentColor;
    color: #6441A4;
}

.btn-nav {
    text-decoration: none;
}

#toolbar{
    box-shadow: 0px 2px 4px -1px rgba(137, 0, 255, 0.2), 0px 4px 5px 0px rgba(59, 2, 255, 0.14), 0px 1px 10px 0px rgba(76, 0, 255, 0.12);
}

</style>