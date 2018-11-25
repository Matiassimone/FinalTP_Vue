<template>
   <div class="login">
    <input v-model="user" type="text" placeholder="Usuario">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">Ingresar</button>
   </div>
</template>
<script>
import authService from '../services/AuthService.js'

export default {
    name: 'login',
    data() {
        return {
            user: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log(this.$router)
           this.$router.push({name:'games'});               
        }
    }
}
</script>

