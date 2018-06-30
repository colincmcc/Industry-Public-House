import React from "react";

import shortid from "shortid";
import styled from "styled-components";
import { WP_FOODS } from "../food/FoodContainer";

// * Prefetches food items on mouse hover for faster loading

const MenuNavComponent = props => {
  return (
    <MenuNavWrapper>
      {props.navItems.map((navItem, index) => (
        <MenuNavItem
          onClick={() => props.foodMenuToggle(navItem.slug)}
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
      ))}
    </MenuNavWrapper>
  );
};

export default MenuNavComponent;

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
