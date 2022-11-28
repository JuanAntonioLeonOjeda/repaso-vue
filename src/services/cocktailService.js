import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
})

export default {
  async getRandomCocktail() {
    try {
      const result = await api.get('random.php')
      return result.data.drinks[0]
    } catch (error) {
      console.log(error.message)
    }
  },
  async getCategoryList() {
    try {
      const result = await api.get('list.php?c=list')
      return result.data
    } catch (error) {
      console.log(error.message)
    }
  },
  async getCocktailInfo(id) {
    const result = await api.get(`lookup.php?i=${id}`)
    return result
  }
}