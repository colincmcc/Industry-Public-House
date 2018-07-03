import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'

import theme from './common/styled/theme'
import HomeContainer from './features/home/HomeContainer'
import NavContainer from './features/nav/NavContainer'


// Using HashLink in components for semi-future proof link solution until react-router supports it out of the box.
class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme} >
      <AppWrapper>
        <NavContainer />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/home" component={HomeContainer} />

        </Switch>
      </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;

const AppWrapper = styled.div`
overflow: hidden;

`