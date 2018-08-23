import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import MenuWrapper from '../components/MenuWrapper';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import FoodDrinkMenuContainer from '../components/foodDrink/FoodDrinkMenuContainer';
import FoodDrinkNav from '../components/foodDrink/FoodDrinkNav';
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
      component: <FoodDrinkMenuContainer query={WP_COCKTAILS} type="cocktails" />,
    },
    {
      label: 'Taps',
      slug: 'Taps',
      link: '/Drink/Taps',
      component: <FoodDrinkMenuContainer query={DP_TAPS} variables={{ location: locationData.currentLocation }} type="taps" />,
    },
    {
      label: 'Cans',
      slug: 'Cans',
      link: '/Drink/Cans',
      component: <FoodDrinkMenuContainer query={WP_CANS} type="cans" />,
    },
    {
      label: 'Wine',
      slug: 'Wine',
      link: '/Drink/Wine',
      component: <FoodDrinkMenuContainer query={WP_WINE} type="wine" />,
    },
    {
      label: 'Premium',
      slug: 'Premium',
      link: '/Drink/Premium',
      component: <FoodDrinkMenuContainer query={WP_PREMIUM} type="premium" />,
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
            render={() => <FoodDrinkMenuContainer query={WP_COCKTAILS} drinkType="cocktails" />}
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
