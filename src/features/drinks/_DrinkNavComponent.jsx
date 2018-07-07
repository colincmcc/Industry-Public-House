// ! Old method of navigation

import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { DP_TAPS } from "./DrinkContainer";

// * Prefetches drink items on mouse hover for faster loading. Desktop only

const TOGGLE_LOCATION = gql`
  mutation selectLocation($currentLocation: Int!) {
    selectLocation(currentLocation: $currentLocation) @client
  }
`;

// TODO: look into impact of multiple Mutation components & possibly simplify into one mutation

const DrinkNavComponent = props => {
  let showNav = false;
  const locationNav = ["/Drink/Taps", "/Drink/Premium", "/Drink/Cans"];
  if (locationNav.includes(props.location.pathname)) {
    showNav = true;
  }

  return (
    <DrinkNavWrapper>
      <DrinkHeader> Drinks </DrinkHeader>
      {/** Drink Type Nav **/}
      <DrinkTypesNav>
        {props.navItems.map(navItem => (
          <Link to={"/Drink/" + navItem.slug}>
            <DrinkNavItem>{navItem.label}</DrinkNavItem>
          </Link>
        ))}
      </DrinkTypesNav>

      {/** Restaurant Location Nav
       * Shown based on above logic for showNav boolean
       **/}
      <LocationsNav className={showNav ? "showNav" : null}>
        {props.locations.map(location => (
          <Mutation key={shortid.generate()} mutation={TOGGLE_LOCATION}>
            {selectLocation => (
              <DrinkNavItem
                onClick={() =>
                  selectLocation({
                    variables: { currentLocation: location.id }
                  })
                }
                onMouseOver={() =>
                  props.client.query({
                    query: DP_TAPS,
                    variables: { location: location.id }
                  })
                }
                className={
                  location.id === props.currentLocation ? "active" : ""
                }
              >
                {location.label}
              </DrinkNavItem>
            )}
          </Mutation>
        ))}
      </LocationsNav>
    </DrinkNavWrapper>
  );
};

export default withRouter(DrinkNavComponent);

const DrinkNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
`;
const DrinkHeader = styled.div`
  ${props => props.theme.components.heading};
`;
const DrinkNavItem = styled.div`
  display: flex;
  margin: auto;
  padding: 1em;
  font-size: ${props => props.theme.fontSizes.medium.size};
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.colors.lightTheme};
  }
`;
const DrinkTypesNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  ${props => props.theme.fontStyles.subheading};
`;
const LocationsNav = styled.div`
  display: none;
  &.showNav {
    display: flex;
    flex-wrap: wrap;
    ${props => props.theme.fontStyles.subheading};
    font-style: italic;
    margin: auto;
  }
`;
