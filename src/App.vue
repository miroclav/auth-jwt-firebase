<template>
  <nav class="menu">
    <RouterLink to="/">Singn Up</RouterLink>
    <RouterLink to="/signin">Singn In</RouterLink>
  </nav>
  <div class="container">
    <RouterView />

  </div>
</template>

<script setup>
</script>


<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;

}

.menu a {
  text-decoration: none;
  color: black;
}

.container {
  max-width: 600px;
  margin: auto;
}
</style>
