<template>
  <v-content fluid>
    <v-layout align-center justify-center row>

      <v-layout align-center justify-center class="half-screen">
        <v-flex align-center justify-center row> 
          <p class="title-result">/ Users Results /</p>

          <v-flex v-for="user in userData" :key="user.id" md6>
            <UserCard :user="user"/>
          </v-flex>
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center class="half-screen">
        <v-flex align-center justify-center row>
          <p class="title-result">/ Games Results /</p>

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
import { mapState } from 'vuex'

export default {

   name: "searchresults",

   components: {
    UserCard,
    OneGame
  },

  computed: {
    ...mapState('games', { gamesData: games => games.data , gamesErrors: games => games.errors, gamesLoading: games => games.loading }),
    ...mapState('usersRequest', { userData: usersRequest => usersRequest.users , userErrors: usersRequest => usersRequest.errors, userLoading: usersRequest => usersRequest.loading })
  },

  methods: {
    redirect(id){ 
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
  .title-result{
    text-align: center;
    color: #6441c8;
    z-index: 2;
    font-size: 5vh;
    font-family: 'dimitri';
    background-color: rgba(111, 53, 161, 0.082);
    box-shadow: 0px 2px 4px -1px rgba(137, 0, 255, 0.2), 0px 4px 5px 0px rgba(59, 2, 255, 0.14), 0px 1px 10px 0px rgba(76, 0, 255, 0.12);
  }

  .half-screen{
    width: 40vw;
    margin: 5vw;
    padding-top: 0;
    align-items: center;
  }



</style>
