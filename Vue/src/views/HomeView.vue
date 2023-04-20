<template>
  <div class="container">
    <AnimalCard v-for="animal in animals" :key="animal.animal_class" :animals="animal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnimalCard from '../components/AnimalCard.vue'

const animals = ref('')
async function getAnimals() {
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animals.value = data.results
  console.log(data)
}
onMounted(() => {
  getAnimals()
})
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
