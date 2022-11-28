<template>
  <div>
    <v-text-field
      label="Search User"
      hide-details="auto"
      v-model="input"
      @input="sendData"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data () {
      return {
        input: ''
      }
    },
    methods: {
      sendData () {
        this.$emit('searchUser', this.input)
      }
    }
  }
</script>

<style scoped>

</style>