<template>
  <div>
    Welcome to Reboot 08
    <router-link :to="{name: 'random'}">
      <ButtonComponent text="Get Random Cocktail"/>
    </router-link>
    <router-link :to="{name: 'categories'}">
      <ButtonComponent text="Get Cocktail Categories"/>
    </router-link>
  </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent.vue'

  export default {
    components: {
      ButtonComponent
    }
  }
</script>

<style scoped>

</style>