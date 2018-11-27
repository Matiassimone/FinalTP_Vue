<template>
<v-content fluid>
  <v-layout>
    <v-flex md12 class="default">
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex
              v-for="game in data"
              :key="game.id"
              md2
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
export default {
   name: "searchresults",
   components:{
    UserCard
  },
  computed: {
    ...mapState('games', ['data', 'errors', 'loading'])
  },

  methods: {
    redirect(id){ 
      this.$router.push({ name: "streamsbygames", params: { gameId: id} });
    } 

  },
  
  mounted() {
    this.$store.dispatch('games/BEGIN_FETCH_GAMES',50);
  }
}
    
}
</script>
<style>

</style>
