<template>
  <div class="chart">
    <div class="title">
      <h2>Animals Found in the Staten Island Properties</h2>
      <p>Theres are the types of animals that were found on the properties</p>
      <Router-link to="/" class="link"><p>Back to Home Page</p></Router-link>
    </div>

    <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
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
  name: 'Staten Island',
  components: {
    Bar
  },
  props: {
    chartOptions: {
      type: Object,
      required: true,
      default: () => ({
        responsive: true
      })
    },
    chartData: {
      type: Object,
      required: true
    }
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
        datasets: [
          {
            label: 'Animal Class Types',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: [
          'rgba(0, 127, 95, 0.2)',
          'rgba(43, 147, 72, 0.2)',
          'rgba(85, 166, 48, 0.2)',
          'rgba(128, 185, 24, 0.2)',
          'rgba(170, 204, 0, 0.2)',
          'rgba(191, 210, 0, 0.2)',
          'rgba(212, 215, 0, 0.2)',
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
        borderWidth: 2.5
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch(
        'https://data.cityofnewyork.us/resource/fuhs-xmg2.json?borough=Staten Island'
      )
      let data = await res.json()
      const birds = data.filter((animal) => animal.animal_class === 'Birds')
      this.chartData.datasets[0].data.push(birds.length)

      const rare = data.filter((animal) => animal.animal_class === 'Rare, Endangered, Dangerous')
      this.chartData.datasets[0].data.push(rare.length)

      const marine = data.filter((animal) => animal.animal_class === 'Marine Mammals-seals only')
      this.chartData.datasets[0].data.push(marine.length)

      const fish = data.filter((animal) => animal.animal_class === 'Fish-Numrerous Quanitiy')
      this.chartData.datasets[0].data.push(fish.length)

      const terr = data.filter(
        (animal) => animal.animal_class === 'Terrstrial Reptile or Amphibian'
      )
      this.chartData.datasets[0].data.push(terr.length)

      const coyotes = data.filter((animal) => animal.animal_class === 'Coyotes')
      this.chartData.datasets[0].data.push(coyotes.length)

      const small = data.filter((animal) => animal.animal_class === 'Small Mammals-non RVS')
      this.chartData.datasets[0].data.push(small.length)

      const raptors = data.filter((animal) => animal.animal_class === 'Raptors')
      this.chartData.datasets[0].data.push(raptors.length)

      this.loaded = true
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

.link {
  text-decoration: none;
  color: #231f20;
}
</style>
