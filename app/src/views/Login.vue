<template>
  <v-app class="limit-screen">

    
    <div class="background-video"></div>
    
      <v-layout align-center justify-center column fill-height >
        <v-layout align-center justify-center row>

          
            <div class="big-quote">
              <h1>asdnsiugbiudrbgirbiu</h1>
            </div>
          

        </v-layout>
      </v-layout>

    <v-layout v-resize="onResize">
     <iframe :src="addImageResolution()" allowfullscreen="true" scrolling="no" :height= "windowSize.y"   :width= "windowSize.x"  ></iframe>
    </v-layout>
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
      user: "",
      password: "",

      windowSize: {
        x: 0,
        y: 0
      }
    };
  },

  computed: {
    ...mapState('streams', ['topStreams'])
  },

  methods: {
    login() {
      this.$router.push({ name: "games" });
    },

    addImageResolution() {
      let url = ('https://player.twitch.tv/?channel='+ this.topStreams.data[0].user_name);
      console.log(url);
      
      return url;
    },

    onResize () {
        this.windowSize = { x: window.innerWidth*1, y: window.innerHeight*12 }
        console.log(this.windowSize);
        
    }
  }
};



/*        <v-flex align-self-center justify-center>   
            <input v-model="user" type="text" placeholder="Usuario">
            <input v-model="password" type="password" placeholder="Password">
            <button @click="login">Ingresar</button>
        </v-flex> */
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
    background-color: #6441A4;
    z-index: 2;
    position: absolute;
  }





</style>


