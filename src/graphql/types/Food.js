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

  return {
    allFoods: {
      type: [FoodTC],
      resolve: () =>
      fetch(`${baseUrl}/acf/v3/foods/`).then(r => r.json()),
    },
    foodsBy: {
      type: [FoodTC],
      args: {
        foodType: `String`,
        id: `Int`
      },
      resolve: (_, args) => {
        if(args.foodType != null){
          return fetch(`${baseUrl}/acf/v3/foods?food_type=${args.foodType}`).then(r => r.json())
        }
        if(args.id != null){
          return fetch(`${baseUrl}/acf/v3/foods/${args.id}`).then(r => [r.json()])
        }
      }
    }
  }
}