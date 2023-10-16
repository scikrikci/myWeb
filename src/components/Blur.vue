<template>

    <div class="ellipse-left blur"></div>
    <div class="ellipse-right blur"></div>
</template>

<style scoped>
.ellipse-left {
  position: fixed;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  left: 15%;
  top: 15%;

  background: linear-gradient(180deg, #CC7AC4 0%, #EB872A 100%);
  filter: blur(50px);

}

.ellipse-right { 
  position: fixed;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  right: 15%;
  bottom: 15%;
  background: linear-gradient(180deg, #363CCE 0%, #3DCDB3 100%);
  filter: blur(50px);

}
</style>