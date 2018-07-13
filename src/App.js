import React, { Component } from 'react';
import {ApolloProvider} from 'react-apollo'
import client from './data/client'
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
import ContactContainer from './features/contact/ContactContainer'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: null,
      loaded: false
    };
  }
  componentDidMount(){
    this.getClientStatus()
  }

  getClientStatus(){
    try {
      const client = await getClient
     } catch (error) {
       console.error('Error restoring Apollo cache', error);
     }
     this.setState({
       client,
       loaded: true
     })
  }
  render() {
    const {client, loaded} = this.state

    if(!loaded) return <div>Loading...</div>


    return (
      <ApolloProvider client={client}>
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
                    <Route path="/Drink"  render={() => < DrinkContainer selectedDrinkType={data.selectedDrinkType}  currentLocation={data.currentLocation} />} />
                    <Route path="/Contact"  render={() => < ContactContainer currentLocation={data.currentLocation} />} />
                </Switch>
                )
              }
            }

            </Query>
            <FooterContainer />
          </AppWrapper>
        </ThemeProvider>
      </ApolloProvider>
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