import composeWithJson from 'graphql-compose-json'
import fetch from 'node-fetch';
import LocationTC from './Location'



const restApiResponse = {
  id: 48,
  locations:  () => ({
    type: `[Json]`,
    resolve: async (source) => {
     var canLoc = []
      source.acf.locations.forEach(element => {
      const loc = fetch(`http://localhost:8080/wp-json/acf/v3/location/${element}`).then(r => r.json())
      canLoc.push(loc)
     });
      return await canLoc
    }
    }),
    acf: {
      locations: [
        104,
        103
      ],
      price: "13",
      name: "Breakfast 1",
      description: "blah / blah / blah"
    }

  }


export const CanTC = composeWithJson('Can', restApiResponse)


export const CanGraphQLType = CanTC.getType()

export function getCanResolvers(baseUrl) {
  return {
    allCans: {
      type: [CanTC],
      resolve: () =>
      fetch(`${baseUrl}/acf/v3/cans/`).then(r => r.json()),
    },
    cansBy: {
      type: [CanTC],
      args: {
        id: `Int`,
      },
      resolve: async (_, args) => {
          return fetch(`${baseUrl}/acf/v3/cans/${args.id}`).then(r => [r.json()])
        }
      },
    }
  }


