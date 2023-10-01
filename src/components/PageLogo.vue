<script setup>
import Logo from './icons/IconLogo.vue'
</script>

<template>
  <div class="logo">
    <Logo/>
  </div>
</template>

<style scoped>
.logo {
  width: 100%;
  text-align: center;
  position: sticky;
  top: 0;
  transition: all .2s ease-in-out;
}
.logo:hover {
  transform: scale(1.2);
}
</style>