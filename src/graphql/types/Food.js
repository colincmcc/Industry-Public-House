import composeWithJson from 'graphql-compose-json'
import fetch from 'node-fetch';


const restApiResponse = {
  id: 48,
  acf: {
      price: "13",
      food_type: "brunch",
      name: "Breakfast 1",
      description: "blah / blah / blah"
  }
}

export const FoodTC = composeWithJson('Food', restApiResponse)


export const FoodGraphQLType = FoodTC.getType()

export function getFoodResolvers(baseUrl){

  FoodTC.addResolver({
    name: 'findById',
    type: FoodTC,
    args: {
      id: `Int!`
    },
    resolve: async rp => fetch(`${baseUrl}/acf/v3/foods/${rp.args.id}`).then(r => r.json())
  })

  FoodTC.addResolver({
    name: 'findMany',
    type: [FoodTC],
    args: {
      foodType: `String`
    },
    resolve: async rp => {
      if(rp.args.foodType != null) return fetch(`${baseUrl}/acf/v3/foods?food_type=${rp.args.foodType}`).then(r => r.json())

      return fetch(`${baseUrl}/acf/v3/foods/`).then(r => r.json())

    }
  })

  return {
    foodById: FoodTC.getResolver('findById'),
    allFoods: FoodTC.getResolver('findMany')
  }
}