<template>
  <div class="container">
    <CaseCard v-for="animal in animals" :key="animal.animal_class" :animals="animal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CaseCard from '../components/CaseCard.vue'

const animals = ref('')
async function getAnimals() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/fuhs-xmg2.json?$query=SELECT%0A%20%20%60date_and_time_of_initial%60%2C%0A%20%20%60date_and_time_of_ranger%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60property%60%2C%0A%20%20%60location%60%2C%0A%20%20%60species_description%60%2C%0A%20%20%60call_source%60%2C%0A%20%20%60species_status%60%2C%0A%20%20%60animal_condition%60%2C%0A%20%20%60duration_of_response%60%2C%0A%20%20%60age%60%2C%0A%20%20%60animal_class%60%2C%0A%20%20%60_311sr_number%60%2C%0A%20%20%60final_ranger_action%60%2C%0A%20%20%60of_animals%60%2C%0A%20%20%60pep_response%60%2C%0A%20%20%60animal_monitored%60%2C%0A%20%20%60rehabilitator%60%2C%0A%20%20%60hours_spent_monitoring%60%2C%0A%20%20%60police_response%60%2C%0A%20%20%60esu_response%60%2C%0A%20%20%60acc_intake_number%60'
  )
  let data = await res.json()
  animals.value = data
  console.log(data)
}
onMounted(() => {
  getAnimals()
})
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
