<script setup>

</script>

<template>
  <div class="container">
    <!--    TODO: scop kullan    -->
    <div class="resume">
      <div class="title">Digitastic: Web Scraping</div>
      <div class="date">January 2022 / Present</div>
      <div class="desc">Web scraping</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: auto;
  padding: 0 15rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.resume {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  //width: 100%;
  height: auto;
}

.resume .title {
  width: max-content;
  height: 2rem;
  display: flex;
  align-items: center;
  border: 1px rgba(255, 255, 255, 0.24) solid;
  color: white;
  box-sizing: content-box;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1.3rem;
}

.resume .date {
  font-size: 1.2rem;
}

.resume .desc {
  font-size: 1.4rem;
  color: white;
}
</style>
