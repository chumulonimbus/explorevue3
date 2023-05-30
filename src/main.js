// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MainApp from './MainApp.vue'
import router from './router'
import store from './store'

import '@mdi/font/css/materialdesignicons.css'
// vuetify 
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    }
})

createApp(MainApp).use(vuetify).use(store).use(router).mount('#app')
