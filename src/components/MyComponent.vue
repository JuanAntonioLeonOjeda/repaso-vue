<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="info.image"
    >
      <v-card-title>{{ info.userName }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ info.age }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="addLike"
      >
        Likes
      </v-btn>
      {{ likes }}
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'MyComponent',
    props: {
      info: Object
    },
    data () {
      return {
        likes: 0
      }
    },
    methods: {
      addLike () {
        this.likes++
      }
    }
  }
</script>

<style scoped>

</style>