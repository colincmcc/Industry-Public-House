import composeWithJson from 'graphql-compose-json'


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

