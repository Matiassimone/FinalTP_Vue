<template>
  <v-app>
      <v-layout>
        <v-flex align-self-center justify-center>   
            <input v-model="user" type="text" placeholder="Usuario">
            <input v-model="password" type="password" placeholder="Password">
            <button @click="login">Ingresar</button>
        </v-flex>
        <v-flex>
          <iframe src="https://player.twitch.tv/?channel=markilokurasy" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          <iframe :src="add()"  frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        </v-flex>
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
    console.log(this.topStreams.data);
  },
  
  data() {
    return {
      user: "",
      password: ""
    };
  },

  computed: {
    ...mapState('streams', ['topStreams'])
  },

  methods: {
    login() {
      console.log(this.$router);
      this.$router.push({ name: "games" });
    },

    addImageResolution() {
      let url = ('https://www.twitch.tv/embed/'+ this.topStreams.data.user_name + '/chat');
      return url;
    },

    add() {
      let url = ('https://player.twitch.tv/?channel='+ this.topStreams.data.user_name);
      return url;
    }
  }
};
</script>

<style>

</style>


