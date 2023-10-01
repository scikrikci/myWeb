<script setup>

</script>

<template>
  <div class="container">
    <div class="circular--landscape">
      <img src="../../public/me.jpeg"/>
    </div>
    <div class="desc">
      <div class="title">It's Me Yeaah !!</div>
      <div class="text">Hi i am </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 500px;
  width: 100%;
  height: 20rem;
  background: #282828;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  gap: 2rem;
}

.desc {
  width: calc(100% - (200px + 2rem));
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.7rem;
  color: white;
}

.desc .text {
  font-size: 1.2rem;
}

.circular--landscape {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
}

</style>