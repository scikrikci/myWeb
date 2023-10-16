<script setup>
import Logo from '@/components/PageLogo.vue'
import Dots from '@/components/Dots.vue'

import { ref } from 'vue';

const buttons = ref([
  { title: 'Projects', link: '/projects' },
  { title: 'About', link: '/about' },
  { title: 'Skills', link: 'skills' },
]);
const isHovered = ref([false, false, false]);

function startAnimation(index) {
  isHovered.value = isHovered.value.map((_, i) => i === index);
}

function stopAnimation() {
  isHovered.value = isHovered.value.map(() => false);
}

</script>

<template>
  <div class="home">
    <div class="dot-ctn">
      <Dots class="dot-one"/>
      <Dots class="dot-two"/>
      <Dots class="dot-three"/>
      <Dots class="dot-four"/>
      <Dots class="dot-five"/>
    </div>

    <div class="logo">
      <Logo />
    </div>
    <div class="cover-animation">
      <div class="text">Hello 👋 I'm</div>
      <section class="animation">
        <div class="box">
          Huseyin Samet Cikrikci
        </div>
        <div class="box">
          Developer
        </div>
        <div class="box">
          2D ^ 3d Artist
        </div>
      </section>
    </div>
    <div class="button-container">
      <div class="button-wrapper" v-for="(button, index) in buttons" :key="index">
        <RouterLink :to="{ path: button.link}" class="button" @mouseover="startAnimation(index)"
          @mouseout="stopAnimation(index)">{{ button.title }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.dot {
  width: 64px;
  height: 64px;
}
.dot-one {
  top: 3.4rem;
  left: 33rem;
}
.dot-two {
  top: 10rem;
  right: 15rem;
}
.dot-three {
  top: 25rem;
  left: 18rem;
}
.dot-four {
  bottom: 12rem;
  left: 36rem;
}
.dot-five {
  bottom: 23rem;
  right: 30rem;
}


.home {
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  font-family: 'Lilita One', sans-serif;
  position: relative;
}


.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 7rem;
}

.button-wrapper {
  width: 11rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
}

.button {
  text-align: center;
  text-decoration: none;
  width: 100%;
  color: white;
  border: none;
  border-radius: .6rem;
  border: 2px solid white;
  background-color: black;
  padding: 1rem 0;
  font-size: 1.3rem;
  transition: .3s ease-in-out;
  cursor: pointer;
  transition: .3s ease-in-out;
  font-family: 'Lilita One', sans-serif;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  color: black;
}

.cover-animation {
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.animation {
  height: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  overflow: hidden;
}

.animation .box {
  width: auto;
  height: 5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  background-color: white;
  border-radius: .5rem;
  color: rgb(255, 255, 255);
  display: inline-block;
}


.animation div {
  animation: box-animation 8s infinite;
}

@keyframes box-animation {
  0% {
    transform: translateY(0rem);
  }

  10% {
    transform: translateY(0rem);
  }

  20% {
    transform: translateY(3.7rem);
  }

  30% {
    transform: translateY(3.7rem);
  }

  40% {
    transform: translateY(0);
  }

  60% {
    transform: translateY(0);
  }

  70% {
    transform: translateY(-3.7rem);
  }

  80% {
    transform: translateY(-3.7rem);
  }

  90% {
    margin-top: 0;
  }

  100% {
    margin-top: 0;
  }
}

.animation .box:nth-child(1) {
  background-color: #20A7D8;
}

.animation .box:nth-child(2) {
  background-color: #D8204C;
}

.animation .box:nth-child(3) {
  background-color: #EB872A;
}</style>
