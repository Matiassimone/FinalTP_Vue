<template>
  <v-app class="limit-screen">
    <div class="background-video"></div>
    
      <v-layout align-center justify-center column fill-height v-resize="onResize">
        <v-layout align-center justify-center row>
            <div class="big-quote" >
              <p class="dimitri-title">"Zwitch the best platform to stream"
                <svg class="logo-FillColor" overflow="visible" width="30px" height="30px" viewBox="0 0 30 30" x="0px" y="0px">
                  <g>
                    <path d="M4,7 L5.56799,3 L27,3 L27,18 L21,24 L16,24 L12.88599,27 L9,27 L9,24 L4,24 L4,7 Z M21,20 L25,16 L25,5 L8,5 L8,20 L12,20 L12,23 L15,20 L21,20 Z"></path>
                    <g>
                      <polygon points="21 9 19 9 19 15 21 15"></polygon>
                      <polygon points="16 9 14 9 14 15 16 15"></polygon>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
        </v-layout>
      </v-layout>

     <iframe  :src="createURL()" allowfullscreen="true" scrolling="no" :height= "windowSize.y"   :width= "windowSize.x"  ></iframe>

  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import authService from "../services/AuthService.js";

export default {
  name: "login",

  mounted() {
    this.$store.dispatch('streams/BEGIN_FETCH_TOPSTREAMS',1);
    this.onResize();
  },
  
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },

  computed: {
    ...mapState('streams', ['topStreams']),
  },

  methods: {

    createURL() {
      if(!this.topStreams.loading) {
        let videoUrl = ('https://player.twitch.tv/?channel='+ this.topStreams.data[0].user_name);
        return videoUrl
      }
    },

    onResize: function () {
        this.windowSize = { x: window.innerWidth*1, y: window.innerHeight*12 }
    }
  }
};
</script>

<style>

  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @font-face {
    font-family: 'dimitri';
    src: url("../../fonts/DIMIS___.TTF");
  }

  .dimitri-title {
    font-family: 'dimitri';
    font-size: 8vh;
  }

  .limit-screen{
    height: 100vh;
  }

  .background-video {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    background: rgba(0, 0, 0, 0.8);
    display: block;
  }

  .big-quote{
    margin-right: 5vh;
    margin-left: 5vh;
    padding-right: 0;
    padding-left: 0;

    margin-top: 70vh;
    color: #6441c8;
    z-index: 2;
    position: auto;
  }

</style>


