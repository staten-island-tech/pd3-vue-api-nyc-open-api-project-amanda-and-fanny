<template>
  <RouterLink to="/manhattan" class="card">
    <h2 class="text">Manhattan</h2>
    <img class="image" src="/images/Manhattan.png" alt="" />
  </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'ManhattanCard',
  props: {},
  components: { RouterLink }
}
</script>

<style scoped>
.card {
  width: 400px;
  height: 400px;
  background-color: #006225;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
  color: #f1faf2;
  border-radius: 50%;
}

.text {
  align-content: center;
  margin: 30px;
}

.image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 40px;
  border-width: 20px;
}
</style>
