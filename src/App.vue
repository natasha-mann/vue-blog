<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <router-view />
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* display: flex;
  flex-direction: column; */
  margin: 0 auto;
}

body {
  margin: 0 auto;
}
</style>
