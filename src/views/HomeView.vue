<script setup>
import {RouterLink, RouterView} from "vue-router";
import Logo from '../components/PageLogo.vue'
// import {ref} from "vue";
// import Footer from '../components/Footer.vue'
// const isActiveColor = ref(false);

</script>

<template>
  <RouterLink to="/">
    <Logo/>
  </RouterLink>
  <nav>
    <div class="box">
      <RouterLink to="/art">Art</RouterLink>
    </div>

    <div class="box">
      <RouterLink to="/skill">Skill</RouterLink>
      <RouterLink to="/about-me">Me</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
    </div>

    <div class="box">
      <RouterLink to="/contact">Concats</RouterLink>
    </div>
  </nav>
  <RouterView/>
  <!--    <Footer/>-->
</template>

<style scoped>
nav {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

nav .box {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

nav .box:nth-last-of-type(1) a {
  height: auto;
}

nav .box a {
  width: 7rem;
  height: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: .4rem 1.2rem;
  border: 1px solid #444444;
  border-radius: 1rem;
  transition: all .2s ease-in-out;
  font-style: oblique;
  font-weight: bolder;
}

nav .box a:hover {
  border: 1px solid #ffffff;
  background: lemonchiffon;
  color: chocolate;
  transform: scale(1.2);
}


</style>
