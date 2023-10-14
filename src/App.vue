<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from '@/components/Footer.vue'

</script>


<template>
  <div class="main">

    <RouterView />

    <Footer />
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
  border: 1px solid white;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
