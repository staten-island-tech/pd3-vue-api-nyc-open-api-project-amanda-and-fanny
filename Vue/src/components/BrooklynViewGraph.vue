<template>
  <div class="chart">
    <div class="title">
      <h2>Animals Found in the Brooklyn Properties</h2>
      <p>Theres are the types of animals that were found on the properties</p>
    </div>

    <Bar :data="data" :options="options" width="350px" height="450px" />
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
        label: 'Animal Class Types',
        datasets: [
          {
            data: [],
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
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  methods: {
    e: function () {
      // this.data.datasets[0].data.push('o')
      console.log(1)
    }
  },
  async mounted() {
    try {
      const res = await fetch(
        'https://data.cityofnewyork.us/resource/fuhs-xmg2.json?borough=Brooklyn'
      )
      const animalData = await res.json()

      const Birds = animalData.filter((animal) => animal.animal_class === 'Birds')
      this.data.datasets[0].data

      // this.data.datasets[0].data.push(1)
      // this.e()

      // console.log(this.data.datasets[0].data, 'l')

      const Rare = animalData.filter(
        (animal) => animal.animal_class === 'Rare, Endangered, Dangerous'
      )
      this.data.datasets[0].data

      const Marine = animalData.filter(
        (animal) => animal.animal_class === 'Marine Mammals-seals only'
      )
      this.data.datasets[0].data

      const Fish = animalData.filter((animal) => animal.animal_class === 'Fish-Numrerous Quanitiy')
      this.data.datasets[0].data

      const Terr = animalData.filter(
        (animal) => animal.animal_class === 'Terrstrial Reptile or Amphibian'
      )
      this.data.datasets[0].data

      const Coyotes = animalData.filter((animal) => animal.animal_class === 'Coyotes')
      this.data.datasets[0].data

      const Small = animalData.filter((animal) => animal.animal_class === 'Small Mammals-non RVS')
      this.data.datasets[0].data

      const invasive = animalData.filter(
        (animal) => animal.animal_class === 'Non Native Fish (invasive)'
      )
      this.data.datasets[0].data

      const Raptors = animalData.filter((animal) => animal.animal_class === 'Raptors')
      this.data.datasets[0].data

      console.log(
        this.data.datasets[0].data.length,
        'o',
        Birds.length,
        Rare.length,
        Marine.length,
        Fish.length,
        Terr.length,
        Coyotes.length,
        Small.length,
        invasive.length,
        Raptors.length
      )
    } catch (e) {
      console.error(e)
    }
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
