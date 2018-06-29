import { GQC } from 'graphql-compose';
import fetch from 'node-fetch';
import {FoodTC} from './types/Food'


const baseUrl = 'http://localhost:8080/wp-json'

GQC.rootQuery().addFields({
  food: {
    type: FoodTC,
    args: {
      id: `Int!`, // equals to `new GraphQLNonNull(GraphQLInt)`
    },
    resolve: (_, args) =>
      fetch(`${baseUrl}/acf/v3/foods/${args.id}/`).then(r => r.json()),
  },
  foods: {
    type: [FoodTC],
    resolve: () =>
    fetch(`${baseUrl}/acf/v3/foods/`).then(r => r.json()),
  },
  foodsByType: {
    type: [FoodTC],
    args: {
      foodType: `String!`
    },
    resolve: (_, args) =>
    fetch(`${baseUrl}/acf/v3/foods?food_type=${args.foodType}`).then(r => r.json()),
  }
})

const schema = GQC.buildSchema(); // returns GraphQLSchema

export default schema;
