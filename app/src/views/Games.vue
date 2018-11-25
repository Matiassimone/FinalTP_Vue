<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <ul id="example-1">
        <li v-for="item in data" :key="item.id">
          {{ item.name }}
          <img :src="addImageResolution(item.box_art_url)">
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'games',
  computed: {
    ...mapState('games', ['data', 'errors', 'loading'])
  },
  methods: {
    addImageResolution(imgURL) {
      let url = imgURL.replace('{width}x{height}','300x300');
      return url;
    }
    

  },
  mounted() {
    this.$store.dispatch('games/BEGIN_FETCH_GAMES');
  }
}
</script>
