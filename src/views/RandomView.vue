<template>
<div>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="drink.strDrinkThumb"
    >
      <v-card-title>{{ drink.strDrink }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ drink.strCategory }}
    </v-card-subtitle>

    <v-card-actions>
      <router-link :to="{name: 'cocktail', params: { id: drink.idDrink} }">
        <v-btn
        color="orange"
        text
        @click="addLike"
      >
        View Cocktail
      </v-btn>
      </router-link>
      
    </v-card-actions>
  </v-card>
  <router-link :to="{name: 'home'}">
    <v-btn
    elevation="2"
    >Go Back Home
    </v-btn>
  </router-link>
</div>
</template>

<script>
import cocktailServices from '../services/cocktailService'

  export default {
    name: 'RandomView',
    data () {
      return {
        drink: {}
      }
    },
    async created() {
      const result = await cocktailServices.getRandomCocktail()
      this.drink = result
    }
  }
</script>

<style scoped>

</style>