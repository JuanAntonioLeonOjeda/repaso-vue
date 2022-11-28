<template>
  <div>
    {{ categories }}
  </div>
</template>

<script>
import cocktailServices from '../services/cocktailService'

  export default {
    name: 'CategoryList',
    data() {
      return {
        categories: []
      }
    },
    async mounted () {
      const result = await cocktailServices.getCategoryList()
      this.categories = result
    }
  }
</script>

<style scoped>

</style>