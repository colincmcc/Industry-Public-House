import React, { Component } from 'react';
import {ApolloProvider} from 'react-apollo'
import { CachePersistor } from 'apollo-cache-persist';
import { Switch, Route, withRouter } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import theme from './common/styled/theme'
import {persistor, apolloClient, cacheStorage} from './data/client'

import asyncComponent from './features/common/AsyncComponent'
import LoadingComponent from './features/common/loading/LoadingComponent'
import NavContainer from './features/nav/NavContainer'
import FooterContainer from './features/footer/FooterContainer'

const AsyncHome = asyncComponent(() => import("./features/home/HomeContainer"))
const AsyncFood = asyncComponent(() => import("./features/food/FoodContainer"))
const AsyncDrink = asyncComponent(() => import("./features/drinks/DrinkContainer"))
const AsyncContact = asyncComponent(() => import("./features/contact/ContactContainer"))
const AsyncMobileMenu = asyncComponent(() => import("./features/nav/mobileNav/MobileMenuContainer"))



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
      await persistor.restore();
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
            <MainContent>
            <Query query={CACHED_STATE}>
            {
            ({ loading, error, data }) => {
              if(loading) return <LoadingComponent />
              if(error) return <p>Error</p>
              return (
                <div>
                  <Switch location={isModal ? this.previousLocation : location}>

                      <Route exact path="/" component={AsyncHome} />

                      <Route path="/Home" component={AsyncHome} />

                      <Route  path="/Food" component={AsyncFood} render={() => <AsyncFood selectedFoodType={data.selectedFoodType} />} />

                      <Route path="/Drink"  render={() => < AsyncDrink selectedDrinkType={data.selectedDrinkType}  currentLocation={data.currentLocation} />} />

                      <Route path="/Contact"  render={() => < AsyncContact currentLocation={data.currentLocation} />} />

                      <Route path="/Apply" component={AsyncHome} />

                      <Route path="/Shop" component={AsyncHome} />

                      <Route path="/Gallery" component={AsyncHome} />

                  </Switch>

                  {(isModal) ? <Route component={AsyncMobileMenu} path="/#Menu" /> : null}

                </div>
                )
              }
            }

            </Query>
            </MainContent>
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
background-color: ${props => props.theme.colors.darkGray};
min-width: 350px;
`
const MainContent = styled.div`

`

const CACHED_STATE = gql`
{
  selectedFoodType @client
  selectedDrinkType @client
  currentLocation @client
}
`