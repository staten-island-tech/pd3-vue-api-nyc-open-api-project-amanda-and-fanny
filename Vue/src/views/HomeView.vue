<template>
  <div>
    <div class="header">
      <img
        class="logo"
        src="https://www.nycgovparks.org/pagefiles/146/nyc-parks-urban-park-rangers-logo-372x372__5e4c028f757df.jpg"
        alt="Urban Park Ranger's Logo"
      />
      <div class="title">
        <h1>Urban Park Rangers Animal Conditions Response</h1>
        <h3>Properties/Parks for each Borough</h3>
      </div>
    </div>
    <div class="container">
      <card2
        v-for="boroughs in boroughs"
        :key="boroughs.borough"
        :borough="boroughs.name"
        :image="boroughs.image"
      />
    </div>
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
          name: 'Brooklyn',
          image: '/images/Brooklyn.png'
        },

        {
          name: 'Manhattan',
          image: '/images/Manhattan.png'
        },

        {
          name: 'Bronx',
          image: '/images/Bronx.png'
        },

        {
          name: 'Queens',
          image: '/images/Queens.png'
        },

        {
          name: 'Staten Island',
          image: '/images/StatenIsland.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
:root {
  --primary: #006225;
  --secondary: #231f20;
  --tertiary: #ffee00;
  --accent: #f1faf2;
}
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

.header {
  width: 90vw;
  margin: 50px auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.title {
  color: var(--secondary);
  align-content: center;
  padding: 20px;
  margin: 3rem;
}

.logo {
  width: 300px;
  height: 300px;
}
</style>
