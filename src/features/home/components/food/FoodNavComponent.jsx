import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import shortid from "shortid";
import styled from "styled-components";
import { WP_FOODS } from "./FoodContainer";

// * Prefetches food items on mouse hover for faster loading

const TOGGLE_FOODTYPE = gql`
  mutation selectFoodType($selectedFoodType: String!) {
    selectFoodType(selectedFoodType: $selectedFoodType) @client
  }
`;

const FoodNavComponent = props => {
  return (
    <MenuNavWrapper>
      {props.navItems.map((navItem, index) => (
        <Mutation key={shortid.generate()} mutation={TOGGLE_FOODTYPE}>
          {selectFoodType => (
            <MenuNavItem
              className={
                navItem.slug === props.selectedFoodType ? "active" : ""
              }
              onClick={() =>
                selectFoodType({
                  variables: { selectedFoodType: navItem.slug }
                })
              }
              onMouseOver={() =>
                props.client.query({
                  query: WP_FOODS,
                  variables: { selectedFoodType: navItem.slug }
                })
              }
            >
              {navItem.label}
            </MenuNavItem>
          )}
        </Mutation>
      ))}
    </MenuNavWrapper>
  );
};

export default FoodNavComponent;

const MenuNavWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  ${props => props.theme.media.tablet_portrait_up`
grid: auto-flow / repeat(auto-fill, minmax(100px, 1fr));

`};
`;
const MenuNavItem = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSizes.medium.size};
  padding: 1em;
  margin: auto;
  text-transform: uppercase;
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.lightTheme};
  }
`;
