<script setup>
import Logo from "./icons/IconLogo.vue";
import CarImage from "./icons/BackLogo.vue";
</script>

<template>
  <div class="container">
    <div class="logo">
      <Logo />
    </div>
    <div class="car-image">
      <CarImage />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 0;
  text-align: center;
  position: relative;
}
.logo {
  position: absolute;
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
</style>
