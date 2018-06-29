import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './features/home/HomeContainer'
import NavContainer from './features/nav/NavContainer'
import './App.css';

// Using HashLink in components for semi-future proof link solution until react-router supports it out of the box.
class App extends Component {

  render() {
    return (
      <div className="App">
        <NavContainer />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/home" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
