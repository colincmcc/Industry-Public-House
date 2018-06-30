import gql from 'graphql-tag'

export const defaults = {
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: true,
  },
  selectedFoodType: "brunch"
};

export const resolvers = {
  Mutation: {
    updateNetworkStatus: (_, { isConnected }, { cache }) => {
      const data = {
        networkStatus: {
          __typename: 'NetworkStatus',
          isConnected
        },
      };
      cache.writeData({ data });
      return null;
    }
  }
}

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
