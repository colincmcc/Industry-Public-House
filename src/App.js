import React, { Component } from 'react';

import HomeContainer from './home/HomeContainer'
import NavContainer from './common/components/nav/NavContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavContainer />
        <HomeContainer />
      </div>
    );
  }
}

export default App;
