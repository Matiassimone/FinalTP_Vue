<template>
<v-content>
  <v-layout>
    <v-flex lg12  class="default">
        <h2>Users Results For : {{this.$route.params.searchWord}}</h2>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex
              v-for="user in userData"
              :key="user.id"
              md2
          >
          <div @click="redirect(user.id)" class="pointer">
            <UserCard :user=user />
          </div>
          </v-flex>
        </v-layout>
      </v-container>  
      <h2>Games Results For : {{this.$route.params.searchWord}}</h2>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex
              v-for="game in gamesData"
              :key="game.id"
              md3
          >
          <div @click="redirect(game.id)" class="pointer">
            <OneGame :game=game />
          </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>  
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
    } 

  },
  
  mounted() {
    this.$store.dispatch('games/BEGIN_FETCH_GAMES_BY_NAME', this.$route.params.searchWord);
    this.$store.dispatch('usersRequest/BEGIN_FETCH_USERS_REQUEST', this.$route.params.searchWord);
  }
}
</script>
<style>

</style>
