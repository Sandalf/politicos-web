<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
    <TheNavbar />
    <main>
        <router-view></router-view>
    </main>
    <TheFooter />
</template>
