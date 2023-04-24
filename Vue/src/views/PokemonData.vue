<template>
  <div>
    <h1>TEST</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monster: {}
    }
  },
  mounted: async function(){
    await getPokemon()
  },
  methods:{
    getPokemon(){
      async function(){
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}')
      }
    }
  }
}
</script>

<style scoped></style>
