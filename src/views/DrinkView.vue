<template>
  <div>
    {{drink}}
  </div>
</template>

<script>
import cocktailServices from '../services/cocktailService'

  export default {
    name: 'CocktailView',
    data () {
      return {
        drink: {}
      }
    },
    async mounted () {
      const result = await cocktailServices.getCocktailInfo(this.$route.params.id)
      this.drink = result
    }
  }
</script>

<style scoped>

</style>