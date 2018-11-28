<template>
  <v-content fluid>
    <LoaderBar :isLoading="loading"/>
      <v-layout v-scroll="onScroll">
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
import { mapState } from 'vuex'
import OneGame from '../components/OneGameCard.vue'
import LoaderBar from '../components/LoaderBar.vue'

export default {
  name: 'games',
  data() {
    return {
      offsetTop: 0,
      actualCursor: "",
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },

  components:{
    OneGame,
    LoaderBar
  },

  computed: {
    ...mapState('games', ['data', 'errors', 'loading', 'pagination'])
  },

  methods: {
    redirect(id){ 
      this.$router.push({ name: "streamsbygames", params: { gameId: id} });
    }, 

    onScroll (e) {
      if ((window.innerHeight + window.pageYOffset + 5) >= document.body.offsetHeight) {

        if(this.pagination.cursor !== this.actualCursor) {

          this.actualCursor = this.pagination.cursor
          this.$store.dispatch('games/BEGIN_FECH_MORE_GAMES', this.pagination.cursor);
        }
      }
    }
  },
  
  mounted() {
    this.$store.dispatch('games/BEGIN_FETCH_GAMES',50);
  }
}
</script>

<style>
  .pointer { cursor: pointer; }
  .default {cursor: default;}
</style>
