import composeWithJson from 'graphql-compose-json'
import fetch from 'node-fetch';


const restApiResponse = {
  id: 48,
  title: {
    rendered: "Lawrenceville"
  },
  acf: {
    loc_symbol: "LV",
    loc_num: "1",
    address: {
      address: "4305 Butler St, Pittsburgh, PA 15201, USA",
      lat: "40.4709302",
      lng: "-79.96044130000001"
    },
    phone_number: "412-683-1100",
    email: "reservations@industrypgh.com",
    number_of_taps: "43",
    loc_description: "",
    facebook: "https://www.facebook.com/industrypublichouse",
    twitter: "https://twitter.com/industrypgh",
    instagram: "https://www.instagram.com/industrypublichouse/",
    trip_advisor: "https://www.tripadvisor.com/Restaurant_Review-g53449-d10035864-Reviews-Industry_Public_House-Pittsburgh_Pennsylvania.html"

  }
}

export const LocationTC = composeWithJson('Location', restApiResponse)


export const LocationGraphQLType = LocationTC.getType()

export function getLocationResolvers(baseUrl) {
  return {
    locationBy: {
      type: LocationTC,
      args: {
        id: `Int!`
      },
      resolve: (_, args) =>
        fetch(`${baseUrl}/wp/v2/location/${args.id}`).then(r => r.json()),
    },
    allLocations: {
      type: [LocationTC],
      resolve: () =>
        fetch(`${baseUrl}/wp/v2/location/`).then(r => r.json()),
    }
  }
}