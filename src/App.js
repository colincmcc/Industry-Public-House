import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import theme from './common/styled/theme'

import LoadingComponent from './common/components/loading/LoadingComponent'
import HomeContainer from './features/home/HomeContainer'
import NavContainer from './features/nav/NavContainer'
import FooterContainer from './features/footer/FooterContainer'
import FoodContainer from './features/food/FoodContainer'
import DrinkContainer from './features/drinks/DrinkContainer'


// Using HashLink in components for semi-future proof link solution until react-router supports it out of the box.
class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme} >

        <AppWrapper>
          <NavContainer />
          <Query query={CACHED_STATE}>
          {
          ({ loading, error, data }) => {
            if(loading) return <LoadingComponent />
            if(error) return <p>Error</p>
            return (
              <Switch>
                  <Route exact path="/" component={HomeContainer} />
                  <Route path="/Home" component={HomeContainer} />
                  <Route  path="/Food" render={() => <FoodContainer selectedFoodType={data.selectedFoodType} />} />
                  <Route  render={() => < DrinkContainer selectedDrinkType={data.selectedDrinkType} path="/Drink" currentLocation={data.currentLocation} />} />
              </Switch>
              )
            }
          }

          </Query>
          <FooterContainer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;

const AppWrapper = styled.div`
overflow: hidden;

`

const CACHED_STATE = gql`
{
  selectedFoodType @client
  selectedDrinkType @client
  currentLocation @client

}
`