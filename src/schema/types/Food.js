import composeWithJson from 'graphql-compose-json'
import {
  createFindByIdResolver
} from '../utils';

const restApiResponse = {
acf: {
    price: () => 'Int!',
    food_type: "brunch",
    name: "Breakfast 1",
    description: "blah / blah / blah"
}
}

export const FoodTC = composeWithJson('Food', restApiResponse)
export const FoodGraphQLType = FoodTC.getType()