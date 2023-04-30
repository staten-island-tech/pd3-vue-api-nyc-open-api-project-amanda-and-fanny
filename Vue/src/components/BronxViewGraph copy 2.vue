<template>
  <div class="chart">
    <div class="title">
      <h2>Animals Found in the Bronx Properties</h2>
      <p>Theres are the types of animals that were found on the properties</p>
    </div>
    <polarArea v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },

  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          'Birds',
          'Rare, Endangered, Dangerous',
          'Marine Mammals - seals only',
          'Fish-Numrerous Quanitiy',
          'Terrstrial Reptile or Amphibian',
          'Coyotes',
          'Small Mammals-non RVS',
          'Non Native Fish (invasive)',
          'Raptors'
        ],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: [
          '#007F5F',
          '#2B9348',
          '#55A630',
          '#80B918',
          '#AACC00',
          '#BFD200',
          '#D4D700',
          '#DDDF00',
          '#EEEF20'
        ]
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch(
        'https://data.cityofnewyork.us/resource/fuhs-xmg2.json?borough=Brooklyn'
      )
      const animalData = await res.json()
      console.log(animalData)

      const Birds = animalData.filter((animal) => animal.animal_class === 'Birds')
      this.chartData.datasets[0].data.push(Birds.length)

      const Rare = animalData.filter(
        (animal) => animal.animal_class === 'Rare, Endangered, Dangerous'
      )
      this.chartData.datasets[0].data.push(Rare.length)

      const Marine = animalData.filter(
        (animal) => animal.animal_class === 'Marine Mammals-seals only'
      )
      this.chartData.datasets[0].data.push(Marine.length)

      const Fish = animalData.filter((animal) => animal.animal_class === 'Fish-Numrerous Quanitiy')
      this.chartData.datasets[0].data.push(Fish.length)

      const Terr = animalData.filter(
        (animal) => animal.animal_class === 'Terrstrial Reptile or Amphibian'
      )
      this.chartData.datasets[0].data.push(Terr.length)

      const Coyotes = animalData.filter((animal) => animal.animal_class === 'Coyotes')
      this.chartData.datasets[0].data.push(Coyotes.length)

      const Small = animalData.filter((animal) => animal.animal_class === 'Small Mammals-non RVS')
      this.chartData.datasets[0].data.push(Small.length)

      const invasive = animalData.filter(
        (animal) => animal.animal_class === 'Non Native Fish (invasive)'
      )
      this.chartData.datasets[0].data.push(invasive.length)

      const Raptors = animalData.filter((animal) => animal.animal_class === 'Raptors')
      this.chartData.datasets[0].data.push(Raptors.length)
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>

<style scoped>
.title {
  color: #231f20;
  align-content: center;
  padding: 20px;
  margin: 3rem;
}
</style>
