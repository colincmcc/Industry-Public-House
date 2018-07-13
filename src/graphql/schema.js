import { GQC } from 'graphql-compose';
import fetch from 'node-fetch';
import {getFoodResolvers} from './types/Food'
import { getHeaderResolvers, HeaderTC } from './types/Header'
import { TapListTC } from './types/TapList'
import { getCocktailResolvers } from './types/Cocktail'
import { getLocationResolvers } from './types/Location'
import { getReviewResolvers } from './types/Review'
// * Individual type files have resolver definitions

const baseUrl = 'http://localhost:8080/wp-json'
const digitalPourUrl = 'https://server.digitalpour.com/DashboardServer/api/v3/MenuItems/54640e97b3b6f60d0887afaa'
const digitalPourKey = '54948fb0b3b6f60a54b37b16'

const cocktailResolvers = getCocktailResolvers(baseUrl)
const foodResolvers = getFoodResolvers(baseUrl)
const headerResolvers = getHeaderResolvers(baseUrl)
const locationResolvers = getLocationResolvers(baseUrl)
const reviewResolvers = getReviewResolvers(baseUrl)

GQC.rootQuery().addFields({
  ...cocktailResolvers,
  ...foodResolvers,
  ...headerResolvers,
  ...locationResolvers,
  ...reviewResolvers,
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
