import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
import { resolvers, defaults } from './resolvers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './common/assets/css/font-awesome.min.css'
import { withClientState } from 'apollo-link-state';


const cache = new InMemoryCache();

const typeDefs = `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
  }

  type Query {
    visibilityFilter: String
    todos: [Todo]
  }
`

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs})
})

ReactDOM.render(
<ApolloProvider client={client} >
  <div>
    <App />
  </div>
</ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
