<template>
   <div class="login">
    <input v-model="user" type="text" placeholder="Usuario">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">Ingresar</button>
   </div>
</template>
<script>
import authService from '@/services/AuthService.js'

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
            authService.login(this.user, this.password)
                .then((token) => {
                    this.$store.commit('setToken', token);
                    this.$router.push({name:'home'});
                })
                .catch((error) => console.log(error));
        }
    }
}
</script>

