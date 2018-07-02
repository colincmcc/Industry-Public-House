import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
import merge from 'lodash.merge'

import homeResolvers from './resolvers/homeResolvers'
import appResolvers from './resolvers/appResolvers'



const cache = new InMemoryCache();


const typeDefs = `
  type NetworkStatus {
    isConnected: Boolean!
  }


  type Mutation {
  }

  type Query {

  }

`;

// TODO Advanced: set network/graphql error response
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )}
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    withClientState({
      ...merge(appResolvers, homeResolvers),
      typeDefs,
      cache
    }),
    new HttpLink({
      uri: 'http://localhost:4000/',
    })
  ]),
  cache
});

export default client