<template>
  <div class="about">
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