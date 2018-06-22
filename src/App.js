import React, { Component } from 'react';
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'

import HomeContainer from './home/HomeContainer'
import NavComponent from './common/components/nav/NavComponent'
import './App.css';

class App extends Component {

  render() {

    // Todo change to production client
    const client = new ApolloClient({
      uri: "http://localhost:8080/graphql"
    })

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <NavComponent />
          <HomeContainer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
