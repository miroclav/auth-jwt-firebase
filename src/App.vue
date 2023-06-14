<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/signup">Singn Up</RouterLink>
    <!-- <RouterLink to="/signin">Sign In</RouterLink> -->

  </nav>

  <RouterView />
</template>

<style scoped></style>
