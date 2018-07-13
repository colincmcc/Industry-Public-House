import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';


import { toIdValue } from 'apollo-utilities';

import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
import merge from 'lodash.merge'

import homeResolvers from './resolvers/homeResolvers'
import appResolvers from './resolvers/appResolvers'

// TODO Advanced: set network/graphql error response
// TODO: complete typeDefs



const SCHEMA_VERSION = '1';
const SCHEMA_VERSION_KEY = 'apollo-schema-version'
const cacheStorage = window.localStorage

const getClient = async () => {

  /**
 * * Cache and persistence setup
 * * persisted data is cleared if there is a new Schema version
*/
  const cache = new InMemoryCache({
    cacheResolvers: {
      Query: {
        foodsBy: (_, { id }) => toIdValue(cache.config.dataIdFromObject({ __typename: 'Food', id })),
      },

    },
    dataIdFromObject: object => object.key || null
  });


  const persistor = new CachePersistor({
    cache,
    storage: cacheStorage,
  });

  const currentVersion = await cacheStorage.getItem(SCHEMA_VERSION_KEY);

  if (currentVersion === SCHEMA_VERSION) {
    // If the current version matches the latest version,
    // we're good to go and can restore the cache.
    await persistor.restore();
  } else {
    // Otherwise, we'll want to purge the outdated persisted cache
    // and mark ourselves as having updated to the latest version.
    await persistor.purge();
    await cacheStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
  }

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

  `;

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

  return client
}

export default getClient