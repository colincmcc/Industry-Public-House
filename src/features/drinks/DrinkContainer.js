import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Switch, Route, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import MenuWrapper from '../components/MenuWrapper';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import DrinkNavComponent from './DrinkNavComponent';
import bgImg from '../../common/assets/img/drinks_banner.jpg';
import DrinkMenuComponent from './DrinkMenuComponent';
import LoadingComponent from '../components/loading/LoadingComponent';
import ErrorComponent from '../components/loading/ErrorComponent';
import {
  DP_TAPS, WP_CANS, WP_WINE, WP_PREMIUM, WP_COCKTAILS,
} from './graphql';
// TODO: get drinkNavItems and locations from Wordpress


const DrinkContainer = (props) => {
  const { selectedDrinkType, currentLocation } = props;


  // ! Location id's are set through Digital Pour. Not a good index reference, since they don't start with 0
  const locations = [
    { id: 1, label: 'Lawrenceville', location: 'lv' },
    { id: 2, label: 'North Fayette', location: 'nf' },
  ];
  const drinkNavItems = [
    {
      label: 'Cocktails', slug: 'Cocktails', component: <DrinkMenuComponent query={WP_COCKTAILS} drinkType="cocktails" />,
    },
    {
      label: 'Taps', slug: 'Taps', component: <DrinkMenuComponent query={DP_TAPS} queryVariables={{ location: currentLocation }} drinkType="taps" />,
    },
    {
      label: 'Cans', slug: 'Cans', component: <DrinkMenuComponent query={WP_CANS} drinkType="cans" />,
    },
    {
      label: 'Wine', slug: 'Wine', component: <DrinkMenuComponent query={WP_WINE} drinkType="wine" />,
    },
    {
      label: 'Premium', slug: 'Premium', component: <DrinkMenuComponent query={WP_PREMIUM} drinkType="premium" />,
    },
  ];

  // TODO: remove query and use ApolloProvider
  return (
    <Query query={WP_COCKTAILS}>
      {
        ({
          loading, error, client,
        }) => {
          if (loading) return <LoadingComponent large />;
          if (error) return <ErrorComponent />;
          return (

            <div>
              <PageHeaderContainer bgImg={bgImg} heading="Drinks" review />

              <DrinkNavComponent
                client={client}
                locations={locations}
                navItems={drinkNavItems}
                currentLocation={currentLocation}
                selectedDrinkType={selectedDrinkType}
              />

              <MenuWrapper>
                <Switch>
                  <Route
                    exact
                    path="/Drink"
                    render={() => <DrinkMenuComponent query={WP_COCKTAILS} drinkType="wine" />}
                  />
                  {drinkNavItems.map(navItem => (
                    <Route
                      key={shortid.generate()}
                      exact
                      path={`/Drink/${navItem.slug}`}
                      render={() => navItem.component}
                    />
                  ))}

                </Switch>
              </MenuWrapper>
            </div>
          );
        }
      }
    </Query>
  );
};

export default withRouter(DrinkContainer);
