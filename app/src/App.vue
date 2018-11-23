<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <input type="date" v-model="fecha" date>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      fecha: new Date().toLocaleDateString().replace('/', '-').replace('/', '-')
    }
  },
  methods: {
    logout(){
      this.$store.commit('removeToken');
      this.$router.push('/');
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
