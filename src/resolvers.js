import gql from 'graphql-tag'

export const defaults = {
  posts: [],
  device: 'MOBILE',
  isConnected: true,
  burgerOpen: false
}
export const resolvers = {
  Mutation: {
    toggleBurger: (_, { burgerOpen }, { cache }) => {
      const data = {
        burgerStatus: {
          _typename: 'BurgerStatus',
          burgerOpen
        }
      }
      cache.writeData({ data })
      return null;
    }
  }
}

