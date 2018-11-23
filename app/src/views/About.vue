<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ contador }}</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  computed: {
    contador() {
      return this.$store.state.counter;
    },
  },
}
</script>