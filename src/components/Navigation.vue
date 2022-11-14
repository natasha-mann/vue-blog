<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <router-link to="/" class="navlink">Home</router-link>
    <router-link to="/login" class="navlink">Login</router-link>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #eee;
  width: 100%;
  height: 10vh;
  align-items: center;
  display: flex;
  padding: 2rem;

  box-sizing: border-box;
  justify-content: flex-end;
}
.navlink {
  color: rgb(18, 18, 18);
  text-decoration: none;
  border-radius: 20px;
  padding: 1rem;
}

.navlink:hover {
  cursor: pointer;
  background-color: rgb(18, 18, 18);
  color: white;
}
</style>
