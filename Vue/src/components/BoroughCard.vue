<template>
  <div class="card">
    <h2 class="text">{{ borough }}</h2>
    <img class="image" v-bind:src="image" />
  </div>
</template>

<script>
export default {
  name: 'card2',
  props: {
    borough: String,
    image: String
  }
}
</script>

<style scoped>
:root {
  --primary: #1db959;
  --secondary: #231f20;
  --tertiary: #ffee00;
  --accent: #f1faf2;
}
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
