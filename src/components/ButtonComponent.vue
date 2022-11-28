<template>
<div>
  <v-btn
    elevation="2"
    >
    {{ text }}
  </v-btn>
</div>
</template>

<script>

  export default {
    name: 'ButtonComponent',
    props: {
      text: String
    },
    data () {
      return {
        drink: {}
      }
    }
  }
</script>

<style scoped>

</style>