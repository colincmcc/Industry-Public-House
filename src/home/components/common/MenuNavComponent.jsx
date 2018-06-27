import React from "react";

import shortid from "shortid";
import styled from "styled-components";

const MenuNavComponent = props => {
  return (
    <MenuNavWrapper>
      {props.options.map((navItem, index) => (
        <MenuNavItem
          onClick={() => props.onChange(navItem.slug)}
          key={shortid.generate()}
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
`;
