import React from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import shortid from "shortid";
import styled from "styled-components";
import { WP_FOODS } from "./FoodContainer";

// * Prefetches food items on mouse hover for faster loading

const TOGGLE_FOODTYPE = gql`
  mutation selectFoodType($selectedFoodType: String!) {
    selectFoodType(selectedFoodType: $selectedFoodType) @client
  }
`

const FoodNavComponent = props => {
  return (
      <MenuNavWrapper>
        {props.navItems.map((navItem, index) => (
          <Mutation mutation={TOGGLE_FOODTYPE}>

            {(selectFoodType, {data}) => (
              <MenuNavItem
                onClick={() => selectFoodType({ variables: { selectedFoodType: navItem.slug}
                })}
                key={shortid.generate()}
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
  display: inline-flex;
  flex-direction: row;
`;
const MenuNavItem = styled.div`
  display: flex;
  padding: 1em;
  font-size: 1.25em;
  color: white;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;
