<script setup>
import { RouterLink, RouterView } from "vue-router";
import Blur from '@/components/Blur.vue'
import Footer from '@/components/Footer.vue'

</script>


<template>
  <Blur/>
  <div class="main">
    <RouterView />

    <Footer />
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

</style>
