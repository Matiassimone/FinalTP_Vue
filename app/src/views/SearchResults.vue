<template>
  <v-content class="margin">
      <v-layout row="true">
    <v-layout>
      <v-flex offset-(size)(0-12)="1"></v-flex>
      <v-flex>
          
        <h1>Users Results For : {{this.$route.params.searchWord}}</h1>

        <v-flex v-for="user in userData" :key="user.id" md6>
          <div @click="redirect(user.id)" >
            <UserCard :user="user"/>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h1>Games Results For : {{this.$route.params.searchWord}}</h1>

        <v-flex v-for="game in gamesData" :key="game.id" md3>
          <div @click="redirect(game.id)" class="pointer">
            <OneGame :game="game"/>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
      </v-layout>
  </v-content>
</template>
<script>
import UserCard from '../components/UserCard.vue'
import OneGame from '../components/OneGameCard.vue'
import { mapState } from 'vuex';
export default {
   name: "searchresults",
   components:{
    UserCard,
    OneGame
  },
  computed: {
    ...mapState('games', { gamesData: games => games.data , gamesErrors: games => games.errors, gamesLoading: games => games.loading }),
    ...mapState('usersRequest', { userData: usersRequest => usersRequest.users , userErrors: usersRequest => usersRequest.errors, userLoading: usersRequest => usersRequest.loading })
  },

  methods: {
    redirect(id){ 
        console.log(id)
      this.$router.push({ name: "streamsbygames", params: { gameId: id} });
    },
    onResize: function () {
            this.windowSize = { x: window.innerWidth*1, y: window.innerHeight*12 }
        }, 

  },
  
  mounted() {
    this.$store.dispatch('games/BEGIN_FETCH_GAMES_BY_NAME', this.$route.params.searchWord);
    this.$store.dispatch('usersRequest/BEGIN_FETCH_USERS_REQUEST', this.$route.params.searchWord);
  }
}
</script>
<style>
.margin{
    margin-top: 5vh;
}

</style>
