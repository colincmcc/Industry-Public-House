import composeWithJson from 'graphql-compose-json'
import fetch from 'node-fetch';



const restApiResponse = {
  id: 48,
  acf: {
      price: "13",
      name: "Breakfast 1",
      description: "blah / blah / blah"
  }
}

export const CocktailTC = composeWithJson('Cocktail', restApiResponse)


export const CocktailGraphQLType = CocktailTC.getType()

export function getCocktailResolvers(baseUrl) {
  return {
    allDrinks: {
      type: [CocktailTC],
      resolve: () =>
      fetch(`${baseUrl}/acf/v3/drinks/`).then(r => r.json()),
    },
    drinksBy: {
      type: [CocktailTC],
      args: {
        id: `Int`
      },
      resolve: (_, args) => {
          return fetch(`${baseUrl}/acf/v3/drinks/${args.id}`).then(r => [r.json()])
      },
    }
  }
}

