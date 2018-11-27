<template>
    <v-app>
        <v-toolbar light app>

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
            <v-spacer></v-spacer>

            <!--Search Field-->
            <v-text-field
                v-model="searchWord"
                hide-details
                prepend-icon="search"
                single-line
                placeholder="Search a user"
                @keyup.enter="submit"
             ></v-text-field>
            <v-spacer></v-spacer>

            <!--User Field-->
            
            <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>
    
            <div class="text-xs-center">
                
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x>

                    <v-btn
                        slot="activator"
                        color="primary"
                        dark> User 
                    </v-btn>
                    
                    <v-card>
                        <v-list>
                            <v-list-tile avatar>


                                <v-list-tile-content>
                                    <v-list-tile-title>John Leider</v-list-tile-title>
                                    <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-btn
                                        :class="fav ? 'red--text' : ''"
                                        icon
                                        @click="fav = !fav"
                                    >
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-switch v-model="message" color="purple"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable messages</v-list-tile-title>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-switch v-model="hints" color="purple"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable hints</v-list-tile-title>
                            </v-list-tile>
                        </v-list>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click="menu = false">Cancel</v-btn>
                            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </div>

        </v-toolbar>
        <router-view/>
    </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      searchWord:""
    };
  },
  methods: {
      submit(event) {
          this.$router.push({ name: "searchResults", params: { searchWord: event.target.value} });          
      }
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

.hola{
    background-color: #6441A4;
    padding: 0;
    margin: 0;
    border: 0;
    width: 20vw;
}

</style>