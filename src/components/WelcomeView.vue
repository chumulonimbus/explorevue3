<template>
    <h3>Welcome {{getUsername()}}</h3>
    <button v-on:click="logout()">Logout</button>
</template>
<style scoped>
button{background: #6da; padding: .25rem 1rem; border-radius: 6px;}
</style>
<script>
import {  GET_USERNAME, SET_AUTHENTICATION } from "../store/storeconstants";
export default {
    name: 'WelcomeVIew',
    data() {
        return {
        }
    },
    methods:{
        logout(){
            this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
            this.$router.push('/')
        },
        getUsername() {
            return this.$store.getters[`auth/${GET_USERNAME}`]
        }, 
    }  
}
</script>