<template>
  <div class="chart">
    <div class="title">
      <h2>Animals Found in the Brooklyn Properties</h2>
      <p>Theres are the types of animals that were found on the properties</p>
    </div>

    <Bar :data="data" :options="options" width="200px" height="400px" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'Brooklyn',
  components: {
    Bar
  },
  data() {
    return {
      data: {
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
        datasets: [
          {
            label: 'Animal Class Types',
            data: [],
            backgroundColor: [
              'rgba(0, 127, 95, 0.2)',
              'rgba(43, 147, 72, 0.2)',
              'rgba(85, 166, 48, 0.2)',
              'rgba(128, 185, 24, 0.2)',
              'rgba(170, 204, 0, 0.2)',
              'rgba(191, 210, 0, 0.2)',
              'rgba(221, 240, 0, 0.2)',
              'rgba(221, 223, 0, 0.2)',
              'rgba(238, 239, 32, 0.2)'
            ],
            borderColor: [
              '#007F5F',
              '#2B9348',
              '#55A630',
              '#80B918',
              '#AACC00',
              '#BFD200',
              '#D4D700',
              '#DDDF00',
              '#EEEF20'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true
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
