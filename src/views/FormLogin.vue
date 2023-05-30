<template>
    <v-card
      class="pa-10 ma-auto my-12"
      max-width="374"
    >
        <h4 class="font-weight-bold text-h5 text-grey-darken-4">Welcome Back</h4>
        <p class="mb-3 text-caption text-grey-darken-1">We're excited to see you again</p>
        <v-form class="mb-2"
            ref="form"
            lazy-validation
        >
        <v-alert v-model="alert" class="text-body-2" closable text="Username and Password doesnt match" type="error" variant="tonal"></v-alert>
            <v-text-field
                color="green"
                label="Username"
                variant="underlined"
                :rules="[rules.required]"
                hide-details="auto"
                class="mb-4"
                v-model="input.username"
            ></v-text-field>
            <v-text-field
                :append-inner-icon="showPaswd ? 'mdi-eye' : 'mdi-eye-off'"
                color="green"
                label="Password"
                variant="underlined"
                :rules="[rules.required, rules.min]"
                :type="showPaswd ? 'text' : 'password'"
                @click:append-inner="showPaswd = !showPaswd"
                hide-details="auto"
                hint="At least 8 characters"
                v-model="input.password"
            ></v-text-field>
        </v-form>
        <v-card-actions class="pa-0">
            <v-btn color="yellow-accent-3" block variant="flat" class="text-none" @click="login()">
                Sign in
            </v-btn>
        </v-card-actions>
        <div class="d-flex">
            <v-btn link variant="plain" :ripple="false" class="text-none px-0 text-caption" size="x-small" color="blue-darken-3">Forgot Password</v-btn>
            <v-btn to="/register" link variant="plain" :ripple="false" class="text-none px-0 text-caption ml-auto" size="x-small" color="blue-darken-3">Create Account</v-btn>
        </div>
    </v-card>
</template>
<script>
import { GET_PASSWORD, GET_USERNAME, SET_AUTHENTICATION } from "../store/storeconstants";
export default{
    data: () => ({
        alert: false,
        showPaswd:false,
        input: {
            username: "",
            password: ""
        },
        output: "",
        rules: {
            required: value => !!value || 'Field is required',
            // email: value => {
            //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            //     return pattern.test(value) || 'Invalid e-mail.'
            // },
            min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),
    methods:{
        login(){
            if(this.input.username == this.$store.getters[`auth/${GET_USERNAME}`] && this.input.password == this.$store.getters[`auth/${GET_PASSWORD}`]){
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
                this.$router.push('/dashboard')
            }
            else{
                this.alert = true
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
                this.$router.push('/')
            }
        }
    }
}
</script>