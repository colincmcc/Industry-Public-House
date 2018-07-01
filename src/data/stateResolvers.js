import gql from 'graphql-tag'


export const typeDefs = `
  type NetworkStatus {
    isConnected: Boolean!
  }


  type Mutation {
    updateNetworkStatus: NetworkStatus
  }

  type Query {

  }
  type FoodMenu {
    foodType
  }
`;

