import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import theme from './common/styled/theme';
import { persistor, apolloClient, cacheStorage } from './data/client';

import asyncComponent from './features/components/AsyncComponent';
import LoadingComponent from './features/components/loading/LoadingComponent';
import NavContainer from './features/components/nav/NavContainer';
import FooterContainer from './features/components/footer/FooterContainer';
import ErrorComponent from './features/components/loading/ErrorComponent';

const AsyncHome = asyncComponent(() => import('./features/home/HomeContainer'));
const AsyncFood = asyncComponent(() => import('./features/food/FoodContainer'));
const AsyncDrink = asyncComponent(() => import('./features/drinks/DrinkContainer'));
const AsyncContact = asyncComponent(() => import('./features/contact/ContactContainer'));
const AsyncPay = asyncComponent(() => import('./features/pay/PayContainer'));
const AsyncApply = asyncComponent(() => import('./features/apply/ApplyContainer'));
const AsyncMobileMenu = asyncComponent(() => import('./features/components/nav/mobileNav/MobileMenuContainer'));
const AsyncShop = asyncComponent(() => import('./features/shop/ShopContainer'));
const AsyncEvent = asyncComponent(() => import('./features/events/EventContainer'));


const SCHEMA_VERSION = '2';
const SCHEMA_VERSION_KEY = 'apollo-schema-version';

const CACHED_STATE = gql`
  {
    currentLocation @client
    allLocations {
    title {
      rendered
    }
    acf {
      loc_num
      loc_symbol
    }
  }
  }
`;


class App extends Component {
  previousLocation = this.props.location;

  constructor(props) {
    super(props);
    this.state = {
      client: null,
      loaded: false,
    };
  }

  async componentDidMount() {
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


  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP'
      && (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    const { client, loaded } = this.state;

    if (!loaded) return <div>Loading...</div>;

    const { location } = this.props;
    const isModal = !!(
      location.state
      && location.state.modal
      && this.previousLocation !== location
    );
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <NavContainer />
            <MainContent>
              <Query query={CACHED_STATE}>
                {
            ({ loading, error, data }) => {
              if (loading) return <LoadingComponent />;
              if (error) return <ErrorComponent />;
              return (
                <div>
                  <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={AsyncHome} />

                    <Route path="/Home" component={AsyncHome} />

                    <Route path="/Food" render={() => <AsyncFood locationData={data} />} />

                    <Route path="/Drink" render={() => <AsyncDrink locationData={data} />} />

                    <Route path="/Contact" render={() => <AsyncContact locationData={data} />} />

                    <Route path="/Apply" component={AsyncApply} />
                    <Route path="/Events" component={AsyncEvent} />

                    <Route path="/Shop" component={AsyncShop} />
                    <Route path="/Pay" component={AsyncPay} />
                  </Switch>

                  {isModal ? <Route component={AsyncMobileMenu} path="/:section*/#Menu" /> : null}
                </div>
              );
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
`;
const MainContent = styled.div`
min-height: 100vh;
`;
