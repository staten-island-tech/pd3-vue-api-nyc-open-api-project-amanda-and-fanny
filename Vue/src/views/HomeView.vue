<template>
  <div class="container">
    <card2 v-for="boroughs in boroughs" :key="boroughs.borough" :borough="boroughs.borough" />
  </div>
</template>

<script>
import card2 from '../components/BoroughCard.vue'

export default {
  name: 'Home',
  components: {
    card2
  },

  data() {
    return {
      boroughs: [
        {
          borough: 'Brooklyn'
        },

        {
          borough: 'Manhattan'
        },

        {
          borough: 'Bronx'
        },

        {
          borough: 'Queens'
        },

        {
          borough: 'Staten Island'
        }
      ]
    }
  }
}
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
