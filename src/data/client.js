import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';

import { toIdValue, getMainDefinition } from 'apollo-utilities';

import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';

import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, split } from 'apollo-link';
import merge from 'lodash.merge';
// eslint-disable-next-line
import { dev, prod } from './config';

import homeResolvers from './resolvers/homeResolvers';
import appResolvers from './resolvers/appResolvers';

// TODO: set network/graphql error response
// TODO: complete typeDefs


export const cacheStorage = window.localStorage;


/**
 * * Cache and persistence setup
 * * persisted data is cleared if there is a new Schema version
*/
const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      foodsBy: (_, { id }) => toIdValue(cache.config.dataIdFromObject({ __typename: 'Food', id })),
    },

  },
  dataIdFromObject: object => object.key || null,
});


export const persistor = new CachePersistor({
  cache,
  storage: cacheStorage,
});


/**
   * * Client setup
   *
  */

const typeDefs = `
    type NetworkStatus {
      isConnected: Boolean!
    }

    type Mutation {
    }

    type Query {

    }
    type Subscription {
    }

  `;
// * GRAPHQL LINK SETUP

const wsLink = new WebSocketLink({
  uri: prod.websocketEndpoint,
  options: {
    reconnect: true,
  },
});
const httpLink = new HttpLink({
  uri: prod.graphQLEndpoint,
});

// Send queries to http server and subscriptions to websocket
const withSplit = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// * APOLLO CLIENT SETUP
const withError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const withState = withClientState({
  ...merge(appResolvers, homeResolvers),
  typeDefs,
  cache,
});


export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    withError,
    withState,
    withSplit,
  ]),
  cache,
});
