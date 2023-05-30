<template>
    <v-row no-gutters>
        <v-col>
            <v-img class="mx-auto my-12" width="300" src="http://localhost:5173/src/assets/logo.svg"></v-img>
        </v-col>
        <v-col class="right-side">
            <router-view />
        </v-col>
    </v-row>
</template>
<style scoped>
.right-side{
    background: linear-gradient(45deg, #45AF5B, #19CC3E);
}
</style>
<script setup>

</script>