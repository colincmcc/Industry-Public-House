
const baseUrl = 'http://localhost:8080/wp-json'



const resolvers = {
  Food: {
    foodType: parent => {
      const { id } = parent
      return fetch(`${baseUrl}acf/v3/foods/${id}`).then(res => res.json())
    }
  },
  Query: {
    foods: () => {
      return fetch(`${baseUrl}/acf/v3/foods`).then(res => res.json())
    },
    food: () => {
      const { id } = args
      return fetch(`${baseUrl}/acf/v3/foods/${id}`).then(res => res.json())
    },

  }
}
