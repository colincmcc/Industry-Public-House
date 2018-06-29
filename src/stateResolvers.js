import gql from 'graphql-tag'

export const resolvers = {
  Mutation: {
    toggleFoodMenu: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'TodoItem', id: variables.id })
      const fragment = gql`
        fragment completeTodo on TodoItem {
          completed
        }
      `;
      const todo = cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };
      cache.writeData({ id, data });
      return null;
    },
  },
  updateNetworkStatus: (_, { isConnected }, { cache }) => {
    const data = {
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected
      },
    };
    cache.writeData({ data });
    return null;
  },
};

export const typeDefs = `
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
`;

export const defaults = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: true,
  },
};