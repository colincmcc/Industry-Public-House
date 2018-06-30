import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';

import { defaults, typeDefs, resolvers} from './stateResolvers'


const cache = new InMemoryCache();


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
      defaults,
      resolvers,
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