<template>
    <form name="login-form">
        <div class="mb-3">
            <label for="username">Username: </label>
            <input type="text" id="username" v-model="input.username" />
        </div>
        <div class="mb-3">
            <label for="password">Password: </label>
            <input type="password" id="password" v-model="input.password" />
        </div>
        <button class="btn btn-outline-dark" type="submit" v-on:click.prevent="login()">
            Login
        </button>
    </form>
    <h3>{{ this.output }}</h3>
  
</template>
<style scoped>
input{border: 1px solid #bbb; padding: .25rem;}
button{background: #6da; padding: .25rem 1rem; border-radius: 6px;}
</style>
<script>
import { GET_PASSWORD, GET_USERNAME, SET_AUTHENTICATION } from "../store/storeconstants";
export default {
    name: 'LoginView',
    data() {
        return {
            input: {
                username: "",
                password: ""
            },
            output: "",
        }
    },
    methods: {
        login() {
            //make sure username OR password are not empty
            if (this.input.username != "" && this.input.password != "") {
                // this.output = "Authentication complete"
                //stores true to the set_authentication and username to the set_username 
                if(this.input.username == this.$store.getters[`auth/${GET_USERNAME}`] && this.input.password == this.$store.getters[`auth/${GET_PASSWORD}`]){
                    this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
                    // this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
                    this.output = "Authentication complete."
                    this.$router.push('/home')
                }
                else{
                    this.output = "User dan password salah"
                }
            } else {
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
                this.output = "Username and password can not be empty"
            }
        },
    },
}
</script>