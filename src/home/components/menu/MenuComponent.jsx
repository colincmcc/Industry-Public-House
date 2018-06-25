import React from "react";
import styled from "styled-components";

import grungeBanner from "../../../common/assets/img/Grunge_Header.svg";

const MenuComponent = () => {
  return (
    <MenuWrapper id="menu">
      <MenuItem> Menus </MenuItem>
      <MenuItem> Events </MenuItem>
      <MenuItem> Menus </MenuItem>
      <MenuItem> Menus </MenuItem>
    </MenuWrapper>
  );
};

export default MenuComponent;

// STYLED COMPONENTS
const MenuWrapper = styled.section`
  display: grid;
  grid: auto-flow / 1fr 1fr;
  background-color: black;
  &:before {
    content: "";
    display: block;
    transform: rotate(180deg) translateY(80px);
    width: 100%;
    height: 125px;
    background-image: url(${grungeBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
`;

const MenuItem = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;
