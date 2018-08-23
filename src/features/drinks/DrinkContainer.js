import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import MenuWrapper from '../components/MenuWrapper';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import DrinkMenuComponent from './DrinkMenuComponent';
import FoodDrinkNav from '../components/nav/foodDrinkNav/FoodDrinkNav'
import bgImg from '../../common/assets/img/drinks_banner.jpg';


import {
  DP_TAPS, WP_CANS, WP_WINE, WP_PREMIUM, WP_COCKTAILS,
} from './graphql';


// TODO: get drinkNavItems and locations from Wordpress


const DrinkContainer = (props) => {
  const { locationData } = props;
  const { allLocations } = locationData;


  const drinkNavItems = [
    {
      label: 'Cocktails',
      slug: 'Cocktails',
      link: '/Drink/Cocktails',
      component: <DrinkMenuComponent query={WP_COCKTAILS} drinkType="cocktails" />,
    },
    {
      label: 'Taps',
      slug: 'Taps',
      link: '/Drink/Taps',
      component: <DrinkMenuComponent query={DP_TAPS} variables={{ location: locationData.currentLocation }} drinkType="taps" />,
    },
    {
      label: 'Cans',
      slug: 'Cans',
      link: '/Drink/Cans',
      component: <DrinkMenuComponent query={WP_CANS} drinkType="cans" />,
    },
    {
      label: 'Wine',
      slug: 'Wine',
      link: '/Drink/Wine',
      component: <DrinkMenuComponent query={WP_WINE} drinkType="wine" />,
    },
    {
      label: 'Premium',
      slug: 'Premium',
      link: '/Drink/Premium',
      component: <DrinkMenuComponent query={WP_PREMIUM} drinkType="premium" />,
    },
  ];
  const wpLocations = allLocations.map(loc => ({
    label: loc.title.rendered,
    id: loc.acf.loc_num,
  }));

  return (
    <div>
      <PageHeaderContainer bgImg={bgImg} heading="Drinks" review />

      <FoodDrinkNav
        locations={wpLocations}
        navItems={drinkNavItems}
        currentLocation={locationData.currentLocation}
      />

      <MenuWrapper>
        <Switch>
          <Route
            exact
            path="/Drink"
            render={() => <DrinkMenuComponent query={WP_COCKTAILS} drinkType="cocktails" />}
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
};

export default withRouter(DrinkContainer);
