<template>
  <v-content fluid>
    <LoaderBar :isLoading="topStreams.loading"/>
    <v-layout>
      <v-flex md12>
        <v-container grid-list-xl fluid>
          
          <v-layout row wrap>
            <v-flex
              v-for="stream in topStreams.data"
              :key="stream.id"
              md3
              >
              <p class="dimitri-title">{{topStreams.data.indexOf(stream) +1}} #</p>
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

  name: 'topstreams',

  components:{
    OneStreamCard,
    LoaderBar
  },

  computed: {
    ...mapState('streams', ['topStreams'])
  },

  methods: {
    redirect(stream){ 
      this.$router.push({ name: "onestream", params: { stream: stream} });
    } 
  },

  mounted() {
    this.$store.dispatch('streams/BEGIN_FETCH_TOPSTREAMS',10);
  }
}
</script>

<style>
  .pointer { cursor: pointer; }

  .dimitri-title {
    font-family: 'dimitri';
    font-size: 8vh;
  }
</style>
