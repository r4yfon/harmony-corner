<script setup>
import NavBar from "./components/NavBar.vue";
import "bootstrap";
// import AllModules from "./views/AllModules.vue";
</script>

<template>
  <NavBar v-if="$route.meta.showNavBar" />
  <!-- <AllModules /> -->
  <RouterView />
</template>
