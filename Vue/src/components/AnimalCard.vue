<template>
  <div class="card">
    <h2>{{ animals.animal_calss }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  animals: Object
})
</script>

<style scoped></style>
