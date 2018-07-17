import React, { Component } from 'react';
import {ApolloProvider} from 'react-apollo'
import { CachePersistor } from 'apollo-cache-persist';
import { Switch, Route, withRouter } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import theme from './common/styled/theme'
import {persistor, apolloClient, cacheStorage} from './data/client'

import LoadingComponent from './common/components/loading/LoadingComponent'
import HomeContainer from './features/home/HomeContainer'
import NavContainer from './features/nav/NavContainer'
import FooterContainer from './features/footer/FooterContainer'
import FoodContainer from './features/food/FoodContainer'
import DrinkContainer from './features/drinks/DrinkContainer'
import ContactContainer from './features/contact/ContactContainer'
import MobileMenuContainer from './features/nav/mobileNav/MobileMenuContainer'


const SCHEMA_VERSION = '2';
const SCHEMA_VERSION_KEY = 'apollo-schema-version'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: null,
      loaded: false
    };
  }
  async componentDidMount(){
    const currentVersion = await cacheStorage.getItem(SCHEMA_VERSION_KEY);
    if (currentVersion === SCHEMA_VERSION) {
      // If the current version matches the latest version,
      // we're good to go and can restore the cache.
      await persistor.purge();
    } else {
      // Otherwise, we'll want to purge the outdated persisted cache
      // and mark ourselves as having updated to the latest version.
      await persistor.purge();
      await cacheStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    }

    this.setState({
      client: apolloClient,
      loaded: true,
    });
  }

  previousLocation = this.props.location;
  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const {client, loaded} = this.state

    if(!loaded) return <div>Loading...</div>

    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

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
                <div>
                  <Switch location={isModal ? this.previousLocation : location}>

                      <Route exact path="/" component={HomeContainer} />

                      <Route path="/Home" component={HomeContainer} />

                      <Route  path="/Food" render={() => <FoodContainer selectedFoodType={data.selectedFoodType} />} />

                      <Route path="/Drink"  render={() => < DrinkContainer selectedDrinkType={data.selectedDrinkType}  currentLocation={data.currentLocation} />} />

                      <Route path="/Contact"  render={() => < ContactContainer currentLocation={data.currentLocation} />} />

                      <Route path="/Apply" component={HomeContainer} />

                      <Route path="/Shop" component={HomeContainer} />

                      <Route path="/Gallery" component={HomeContainer} />

                  </Switch>

                  {(isModal) ? <Route component={MobileMenuContainer} path="/#Menu" /> : null}

                </div>
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

export default withRouter(App);

const AppWrapper = styled.div`
overflow: hidden;
box-sizing: border-box;
`

const CACHED_STATE = gql`
{
  selectedFoodType @client
  selectedDrinkType @client
  currentLocation @client
}
`