<template>
    <!-- <div>
        <v-navigation-drawer app v-model="drawer">
            <v-list-item color="#0B1320">
                <v-img width="40" src="http://localhost:5173/src/assets/logo.svg"></v-img>
            </v-list-item>
            <v-list dense nav>
                <v-list-item link to="/dashboard" class="py-1">
                    <template v-slot:prepend>
                        <v-icon color="#0B1320">mdi-view-dashboard</v-icon>
                    </template>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item link class="py-1" to="/report">
                    <template v-slot:prepend>
                        <v-icon color="#0B1320">mdi-account-check</v-icon>
                    </template>
                    <v-list-item-title>Report Presence</v-list-item-title>
                </v-list-item>
                <v-list-item link class="py-1" to="/performance">
                    <template v-slot:prepend>
                        <v-icon color="#0B1320">mdi-chart-box</v-icon>
                    </template>
                    <v-list-item-title>Performance</v-list-item-title>
                </v-list-item>
                <v-list-item link class="py-1" to="/payroll">
                    <template v-slot:prepend>
                        <v-icon color="#0B1320">mdi-wallet</v-icon>
                    </template>
                    <v-list-item-title>Payroll</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dark color="#45AF5B" elevation="1">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-menu offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn class="ml-auto px-0" text v-bind="attrs" v-on="on">
                        <v-avatar color="yellow" size="36">
                            <span class="black--text text-body-2">A</span>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon class="mr-3">
                            <v-icon color="#0B1320">mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="text-body-2">Account</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link :to="'/'">
                        <v-list-item-icon class="mr-3">
                            <v-icon color="#0B1320">mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="text-body-2">Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main style="background-color: #F6FFF8;">

            <v-container fluid>

            <div class="ma-6">
                <router-view></router-view>
            </div>
            </v-container>
        </v-main>
        
    </div>     -->
    <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" @click="rail = false">
            <v-list-item class="py-3" prepend-avatar="http://localhost:5173/src/assets/logo.svg" title="My App" nav></v-list-item>
            
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-home-city" title="Dasboard" link to="/dashboard"></v-list-item>
                <v-list-item prepend-icon="mdi-account-group-outline" title="Administrator" link to="/administrator"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="Setting" link to="/setting"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="#45AF5B" theme="dark" elevation="0">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="rail = !rail"></v-app-bar-nav-icon>
            </template>
            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon :ripple="false" class="px-0">
                            <v-avatar color="yellow" size="36">
                                <span class="black--text text-body-2">A</span>
                            </v-avatar>
                        </v-btn>
                    </template>

                    <v-list theme="light" style="width: 150px" density="compact">
                        <v-list-item link>
                            <template v-slot:prepend>
                                <v-icon class="mr-3 text-h6">mdi-account</v-icon>
                            </template>
                            <v-list-item-title class="text-body-2">Account</v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item link @click="logout()">
                            <template v-slot:prepend>
                                <v-icon class="mr-3 text-h6">mdi-logout</v-icon>
                            </template>
                            <v-list-item-title class="text-body-2">Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>

        <v-main style="min-height: 300px; background-color: #F6FFF8;">
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-layout>
</template>
<style scoped>
.active{background-color: #F6FFF8;}
</style>
<script>
import { SET_AUTHENTICATION } from "../store/storeconstants";
export default{
    data() {
        return {
            drawer: true,
            rail: false,
        }
    },
    methods:{
        logout(){
            this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
            this.$router.push('/')
        },
    }
}
</script>