import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import RandomView from '../views/RandomView'
import CategoryList from '../views/CategoryList'
import DrinkView from '../views/DrinkView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/random',
    name: 'random',
    component: RandomView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryList
  },
  {
    path: '/drink/:id',
    name: 'cocktail',
    component: DrinkView,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
