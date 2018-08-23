import React from 'react';
import shortid from 'shortid';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import theme from '../../../common/styled/theme';


const TOGGLE_LOCATION = gql`
  mutation selectLocation($currentLocation: Int!) {
    selectLocation(currentLocation: $currentLocation) @client
  }
`;


const FoodDrinkNav = (props) => {
  const {
    classes, location, navItems, currentLocation, locations,
  } = props;
  const currentPath = location.pathname;
  let scrollMenu = true;
  let showNav = false;
  if (window.innerWidth > 760) { scrollMenu = false; }

  // If at one of these locations, show location nav
  const locationNav = ['/Drink/Taps', '/Drink/Premium', '/Drink/Cans'];
  if (locationNav.includes(location.pathname)) {
    showNav = true;
  }

  return (
    <MenuNavWrapper>
      <Tabs
        centered={!scrollMenu}
        scrollable={!!scrollMenu}
        scrollButtons="auto"
        value={currentPath}
        classes={{
          indicator: classes.indicator,
          root: classes.tabsRoot,
        }}
      >
        {navItems.map(navItem => (
          <Tab
            key={shortid.generate()}
            label={navItem.label}
            value={navItem.link}
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
            }}
            component={Link}
            to={navItem.link}
          />
        ))}
      </Tabs>
      {/** Restaurant Location Nav - Shown based on above logic for showNav boolean
         * * value is -1 because Digital Pour starts indexing at 1 instead of 0
         * * and MaterialUI wasn't handling it well
         * */}
      <LocationsNav className={showNav ? 'showNav' : null}>
        <Tabs
          fullWidth
          value={currentLocation - 1}
          classes={{
            indicator: classes.indicator,
            root: classes.tabsRoot,
          }}
        >
          {locations.map(l => (
            <Mutation key={shortid.generate()} mutation={TOGGLE_LOCATION}>
              {selectLocation => (
                <Tab
                  value={l.id - 1}
                  label={l.label}
                  onClick={() => selectLocation({
                    variables: { currentLocation: l.id },
                  })
                    }
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                  }}
                />
              )}
            </Mutation>
          ))}
        </Tabs>
      </LocationsNav>
    </MenuNavWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(FoodDrinkNav));

const MenuNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2em 2em;
  padding-top: 56px;
`;

const LocationsNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  opacity: 0;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-bottom: 20px;
  &.showNav {
    display: flex;
    opacity: 1;
    ${props => props.theme.fontStyles.subheading};
    font-style: italic;
  }
`;
