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

const DrinkNavComponent = props => {
  return (
    <DrinkNavWrapper>
      {props.navItems.map(navItem => (
        <Mutation key={shortid.generate()} mutation={TOGGLE_DRINKTYPE}>
          {selectDrinkType => (
            <DrinkNavItem
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
      <br />
      {props.locations.map(location => (
        <Mutation key={shortid.generate()} mutation={TOGGLE_LOCATION}>
          {selectLocation => (
            <DrinkNavItem
              onClick={() =>
                selectLocation({ variables: { currentLocation: location.id } })
              }
              onMouseOver={() =>
                props.client.query({
                  query: DP_TAPS,
                  variables: { location: location.id }
                })
              }
            >
              {location.label}
            </DrinkNavItem>
          )}
        </Mutation>
      ))}
    </DrinkNavWrapper>
  );
};

export default DrinkNavComponent;

const DrinkNavWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
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
`;
