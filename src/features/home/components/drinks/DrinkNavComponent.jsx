import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { DP_TAPS } from "./DrinkContainer";

// * Prefetches drink items on mouse hover for faster loading

const TOGGLE_DRINKTYPE = gql`
  mutation selectDrinkType($selectedDrinkType: String!) {
    selectDrinkType(selectedDrinkType: $selectedDrinkType) @client
  }
`;
const TOGGLE_LOCATION = gql`
  mutation selectLocation($currentLocation: Int!) {
    selectLocation(currentLocation: $currentLocation) @client
  }
`;

// TODO: look into impact of multiple Mutation components & possibly simplify into one mutation

const DrinkNavComponent = props => {
  let showNav = false;
  console.log(props.selectedDrinkType);
  const locationNav = ["taps", "premium", "bottles"];
  if (locationNav.includes(props.selectedDrinkType)) {
    showNav = true;
  }
  console.log(showNav);

  return (
    <DrinkNavWrapper>
      {/** Drink Type Nav **/}
      <DrinkTypesNav>
        {props.navItems.map(navItem => (
          <Mutation key={shortid.generate()} mutation={TOGGLE_DRINKTYPE}>
            {selectDrinkType => (
              <DrinkNavItem
                className={
                  navItem.slug === props.selectedDrinkType ? "active" : ""
                }
                onClick={() =>
                  selectDrinkType({
                    variables: { selectedDrinkType: navItem.slug }
                  })
                }
              >
                {navItem.label}
              </DrinkNavItem>
            )}
          </Mutation>
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

export default DrinkNavComponent;

const DrinkNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const DrinkNavItem = styled.div`
  display: flex;
  padding: 1em;
  font-size: 1.25em;
  color: white;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
  &.active {
    color: yellow;
  }
`;
const DrinkTypesNav = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
`;
const LocationsNav = styled.div`
  display: none;

  &.showNav {
    display: inline-flex;
    flex-direction: row;
    width: 100%;
  }
`;
