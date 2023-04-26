<template>
  <div class="card">
    <h2>{{ borough }}</h2>
  </div>
</template>

<script>
export default {
  name: 'card2',
  props: {
    borough: String
  }
}
</script>

<style scoped>
.card {
  width: 20%;
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
