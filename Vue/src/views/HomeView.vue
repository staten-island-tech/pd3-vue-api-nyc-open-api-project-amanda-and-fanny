<template>
  <div class="container">
    <BoroughCard v-for="boroughs in boroughs" :key="boroughs.borough" />
  </div>
</template>

<script setup>
import BoroughCard from '../components/BoroughCard.vue'
</script>

<style scoped>
.container {
  width: 90vw;
  margin: 50px auto;
  padding-left: 2rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
