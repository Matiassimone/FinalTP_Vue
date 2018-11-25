<template>
  <v-app>
    <v-toolbar dark app>
          <v-flex size=2>      
          <v-toolbar-title class="headline text-uppercase">
            <span>Zwitch</span>
          </v-toolbar-title>
          </v-flex>
          <v-flex size=1>
          <v-btn flat><router-link to="/">Home</router-link></v-btn> 
          </v-flex>
          <v-flex size=1>
          <v-btn flat><router-link to="/about">About</router-link></v-btn> 
          </v-flex>       
    </v-toolbar>
      <router-view/>
      
</v-app>
</template>

<script>


export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      //
    };
  }
};
</script>
