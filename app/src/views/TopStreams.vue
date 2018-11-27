<template>
  <v-content fluid>
    <v-layout>
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

export default {
    name: 'topstreams',

    components:{
        OneStreamCard
    },

    computed: {
        ...mapState('streams', ['streamsByGameId'])
    },

    methods: {
         redirect(stream){ 
            this.$router.push({ name: "onestream", params: { stream: stream} });
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
