import { GQC } from 'graphql-compose';
import fetch from 'node-fetch';
import {FoodTC} from './types/Food'
import { HeaderTC } from './types/Header'
import { TapListTC } from './types/TapList'


// * Tried to write this to make it as expandable as possible

const baseUrl = 'http://localhost:8080/wp-json'
const digitalPourUrl = 'https://server.digitalpour.com/DashboardServer/api/v3/MenuItems/54640e97b3b6f60d0887afaa'
const digitalPourKey = '54948fb0b3b6f60a54b37b16'
const locations = {
  iphLV: 1,
  iphNF: 2
}
// Todo: move individual resolvers into type declarations

GQC.rootQuery().addFields({
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
  },
  headerBy: {
    type: HeaderTC,
    args: {
      id: `Int!`
    },
    resolve: (_, args) =>
      fetch(`${baseUrl}/wp/v2/headers/${args.id}`).then(r => r.json()),
  },
  allHeaders: {
    type: [HeaderTC],
    resolve: () =>
      fetch(`${baseUrl}/wp/v2/headers/`).then(r => r.json()),
  },
  pageBy: {
    type: [HeaderTC],
    args: {
      id: `Int`,
      slug: `String`
    },
    resolve: (_, args) => {
      if(args.id != null){
        return fetch(`${baseUrl}/wp/v2/pages/${args.id}`).then(r => [r.json()])
      }
      if(args.slug != null){
        return fetch(`${baseUrl}/wp/v2/pages?slug=${args.slug}`).then(r => r.json())
      }
    }
  },
  allPages: {
    type: [HeaderTC],
    resolve: () =>
      fetch(`${baseUrl}/wp/v2/pages/`).then(r => r.json()),
  },
  allTaps: {
    type: [TapListTC],
    args: {
      location: `Int!`,
    },
    resolve: (_, args) =>
      fetch(`${digitalPourUrl}/${args.location}/Tap?apiKey=${digitalPourKey}`).then(r => r.json()),
  }
})

const schema = GQC.buildSchema(); // returns GraphQLSchema

export default schema;
