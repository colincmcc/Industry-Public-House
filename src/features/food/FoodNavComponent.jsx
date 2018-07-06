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
      <FoodHeader> Food </FoodHeader>
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
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 1em 2em;
`;

const FoodHeader = styled.div`
  ${props => props.theme.components.heading};
  width: 100%;
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
