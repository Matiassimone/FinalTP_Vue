<template>
  <v-app class="limit-screen">

      <v-layout align-center justify-center column fill-height v-resize="onResize">
        <v-layout align-center justify-center row>

            <iframe :src="createVideoURL()"  allowfullscreen="true" scrolling="no" :height= "windowVideoSize.y" :width= "windowVideoSize.x" ></iframe>
            <iframe :src="createChatURL()" frameborder="0" scrolling="0" :height= "windowChatSize.y" :width= "windowChatSize.x"></iframe>

        </v-layout>
      </v-layout>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'onestream',

    mounted() {
        this.$store.dispatch('streams/BEGIN_FETCH_STREAMBYUSERID',this.$route.params.stream.id);
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
        ...mapState('streams', ['topStreams']),
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
    }
}
</script>

<style>

</style>

