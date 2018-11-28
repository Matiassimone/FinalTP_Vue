<template>
  <v-app class="limit-screen">
      <v-content fluid>
        <LoaderBar :isLoading="loading"/>
        <v-layout align-center justify-center column fill-height v-resize="onResize" class="adjust-content">
            
            <div class="playing-game" @click="redirect()">
                <v-avatar class="auto-fav"
                    size= 12vh>

                    <img :src="addImageResolution(this.data[0].box_art_url)" alt="Game name" class="display-img">
                    
                    <v-icon class="title-game"
                    color="primary"
                    >{{this.data[0].name}}</v-icon>
                </v-avatar>
            </div>
            
            <v-layout align-center justify-center row>

                <iframe :src="createVideoURL()"  allowfullscreen="true" scrolling="no" :height= "windowVideoSize.y" :width= "windowVideoSize.x" ></iframe>
                <iframe :src="createChatURL()" frameborder="0" scrolling="0" :height= "windowChatSize.y" :width= "windowChatSize.x"></iframe>

            </v-layout>
        </v-layout>
      </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import LoaderBar from '../components/LoaderBar.vue'

export default {
    name: 'onestream',

    components:{
        LoaderBar
    },

    mounted() {
        this.$store.dispatch('games/BEGIN_FETCH_GAMES_BY_ID',this.$route.params.stream.game_id);
        this.onResize();
    },

    data() {
        return {
            windowVideoSize: {
                x: 0,
                y: 0
            },
            windowChatSize: {
                x: 0,
                y: 0
            }
        }
    },

    computed: {
        ...mapState('games', ['data', 'errors', 'loading'])
    },

    methods: {
        createVideoURL() {
            let videoUrl = ('https://player.twitch.tv/?channel='+ this.$route.params.stream.user_name);
            return videoUrl
        },
        createChatURL() {
            let videoUrl = ('https://www.twitch.tv/embed/'+ this.$route.params.stream.user_name + "/chat");
            return videoUrl
        },

        onResize: function () {
            this.windowVideoSize = { x: window.innerWidth*0.5, y: window.innerHeight*0.6 }
            this.windowChatSize = { x: window.innerWidth*0.3, y: window.innerHeight*0.749 }
        },

        addImageResolution(imgURL) {
            let url = imgURL.replace('{width}x{height}','285x380');
            return url;
        },

        redirect(){ 
            let id = this.data[0].id
            this.$router.push({ name: "streamsbygames", params: { gameId: id} });
        }, 
    }
}
</script>

<style>
    .adjust-content {
        margin-top: -6vh;
    }

    .playing-game{
        margin-top: 40vh;
        position: fixed;
        cursor: pointer;
    }

    .title-game {
        font-family: 'dimitri';
        font-size: 5vh;
        margin-bottom: 0;
        position: auto;
    }

    .auto-fav{
        padding-right: 50vw;
    }

    .display-img{
        margin-right: 30px;
        display: -webkit-box;
    }

    img.display-img {
        display: -webkit-box;
    }

    i.v-icon.title-game.material-icons.theme--light.primary--text {
        display: -webkit-box;
    }   
</style>

