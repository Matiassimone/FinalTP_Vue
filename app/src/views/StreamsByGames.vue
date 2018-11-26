<template>
    <v-content fluid>
  <v-layout>
    <v-flex md12 class="default">
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex
              v-for="stream in data"
              :key="stream.id"
              md2
          >
            <OneStreamCard :stream=stream />
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
    name: 'streamsbygames',
    components:{
        OneStreamCard
    },
    props: ["gameID"],
    computed: {
        ...mapState('streams', ['data', 'errors', 'loading'])
    },
    methods: {

    },
    mounted() {
    this.$store.dispatch('streams/BEGIN_FETCH_STREAMSBYGAMEID',50);
  }
}
</script>
<style>

</style>

