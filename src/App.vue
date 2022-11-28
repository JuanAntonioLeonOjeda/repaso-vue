<template>
  <v-app>
    <SearchInput @searchUser="saveInput" />
    <!-- <MyComponent v-for="(user, idx) in filterUsers" :key="idx" :info="user" /> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import SearchInput from './components/SearchInput.vue'

export default {
  name: 'App',
  components: {
    MyComponent,
    SearchInput,
  },
  data: () => ({
    users: [
    {
      userName: 'Oliver',
      age: 78,
      image: 'https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg'
    },
    {
      userName: 'Ana',
      age: 89,
      image: 'https://ceacopiniones.es/wp-content/uploads/2019/03/user-8.png'
    },
    {
      userName: 'Fulano',
      age: 65,
      image: 'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg'
    }
    ],
    query: ''
  }),
  methods: {
    saveInput (text) {
      this.query = text
    }
  },
  computed: {
    filterUsers () {
      const result = this.users.filter(user => {
        return user.userName.toLowerCase().includes(this.query.toLowerCase())
      })
      return result
    }
  }
};
</script>
