<template>
  <router-link :to="pkmnPath" class="card">
    <h2>{{ pokemon.name }}</h2>
    <h3>{{ id }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  pokemon: Object,
  id: Number
})
const pkmnPath = computed(() => {
  return '/PokemonData/${props.pokemon.name}'
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
