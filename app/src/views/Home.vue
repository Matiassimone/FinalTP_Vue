<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ contador }} - {{ doble }}</p>
    <button @click="plusOne">+1</button>
    <button @click="minusOne">-1</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    contador() {
      return this.$store.state.counter;
    },
    doble() {
      return this.$store.getters.twice;
    }
  },
  methods: {
    plusOne() {
      this.$store.commit('addOne');
    },
    minusOne() {
      this.$store.commit('addNumber', {valor: 4, otra: 'cosa'});
    }
  }
}
</script>
