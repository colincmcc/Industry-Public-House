import React from 'react';

import { Switch, Route } from 'react-router-dom';
import shortid from 'shortid';
import gql from 'graphql-tag';

import MenuWrapper from '../components/MenuWrapper';
import FoodDrinkNav from '../components/nav/foodDrinkNav/FoodDrinkNav'
import bgImg from '../../common/assets/img/burgher.jpg';

import PageHeaderContainer from '../components/page/PageHeaderContainer';
import FoodMenuComponent from './FoodMenuComponent';

// Eventually will move to @export to provide queries with cached variables
// See here https://github.com/apollographql/apollo-link-state/issues/168

export const WP_FOODS = gql`
  query Foods($selectedFoodType: String!) {
    menuItems: foodsByMeta(food_type: $selectedFoodType) {
      id
      acf {
        price
        food_type
        name
        description
      }
    }
  }
`;
const FoodContainer = (props) => {
  const { locationData } = props;
  const { allLocations } = locationData;
  const wpLocations = allLocations.map(loc => ({
    label: loc.title.rendered,
    id: loc.acf.loc_num,
  }));
  const navItems = [
    {
      id: 0, label: 'Brunch', link: '/Food/Brunch', slug: 'brunch',
    },
    {
      id: 1, label: 'Starters', link: '/Food/Starters', slug: 'starters',
    },
    {
      id: 2, label: 'Greens', link: '/Food/Greens', slug: 'greens',
    },
    {
      id: 3,
      label: 'Handhelds',
      link: '/Food/Handhelds',
      slug: 'handhelds',
    },
    {
      id: 4, label: 'Burghers', link: '/Food/Burghers', slug: 'burghers',
    },
    {
      id: 5,
      label: 'Sustenance',
      link: '/Food/Sustenance',
      slug: 'sustenance',
    },
  ];
  return (

    <div>
      <PageHeaderContainer heading="Food" bgImg={bgImg} review />
      <FoodDrinkNav
        navItems={navItems}
        locations={wpLocations}
        currentLocation={locationData.currentLocation}
      />
      <MenuWrapper>
        <Switch>
          <Route
            exact
            path="/Food"
            render={() => (
              <FoodMenuComponent
                query={WP_FOODS}
                variables={{ selectedFoodType: 'brunch' }}
              />
            )}
          />
          {navItems.map(navItem => (
            <Route
              key={shortid.generate()}
              exact
              path={navItem.link}
              render={() => (
                <FoodMenuComponent
                  query={WP_FOODS}
                  variables={{ selectedFoodType: navItem.slug }}
                />
              )}
            />
          ))}


        </Switch>
      </MenuWrapper>

    </div>

  );
};
export default FoodContainer;
