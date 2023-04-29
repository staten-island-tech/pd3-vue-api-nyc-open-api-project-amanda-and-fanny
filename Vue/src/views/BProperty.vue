<template>
  <div>
    <h1>{{ park.borough }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      park: {}
    }
  },

  mounted: async function () {
    await this.getProperty()
  },
  methods: {
    getProperty: async function () {
      let res = await fetch(
        `https://data.cityofnewyork.us/resource/fuhs-xmg2.json?borough=${this.$route.params.borough}`
      )

      let data = await res.json()
      this.park = data

      console.log('work')
    }
  }
}
</script>

<style scoped></style>
