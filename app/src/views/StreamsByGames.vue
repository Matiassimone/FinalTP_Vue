<template>
  <v-content fluid>
    <LoaderBar :isLoading="streamsByGameId.loading"/>
    <v-layout v-scroll="onScroll">
      <v-flex md12 class="default">
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
            <v-flex
              v-for="stream in streamsByGameId.data"
              :key="stream.id"
              md3
              >
              <div @click="redirect(stream)" class="pointer">
                <OneStreamCard :stream=stream />
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
import OneStreamCard from '../components/OneStreamCard.vue'
import LoaderBar from '../components/LoaderBar.vue'

export default {   

  name: 'streamsbygames',

  data() {
    return {
      actualCursor: ""
    }
  },

  components:{
    OneStreamCard,
    LoaderBar
  },

  computed: {
    ...mapState('streams', ['streamsByGameId'])
  },

  methods: {

    redirect(stream){ 
      this.$router.push({ name: "onestream", params: { stream: stream} });
    },

    onScroll (e) {
      if ((window.innerHeight + window.pageYOffset + 5) >= document.body.offsetHeight) {

        if(this.streamsByGameId.pagination.cursor !== this.actualCursor) {

          this.actualCursor = this.streamsByGameId.pagination.cursor;
          this.$store.dispatch('streams/BEGIN_FETCH_MORE_STREAMSBYGAMEID', {gameID: this.$route.params.gameId, cant:20, cursor: this.streamsByGameId.pagination.cursor});
        }
      }
    } 
  },

  mounted() {
    this.$store.dispatch('streams/BEGIN_FETCH_STREAMSBYGAMEID',this.$route.params.gameId);
  }
}
</script>

<style>
    .pointer { cursor: pointer; }
</style>

