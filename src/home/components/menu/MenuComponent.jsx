import React from "react";
import styled from "styled-components";

import grungeBanner from "../../../common/assets/img/Grunge_Header.svg";
import lightBg from "../../../common/assets/img/gerrie-van-der-walt-469060-unsplash.jpg";
import menuBg from "../../../common/assets/img/Gallery-Background.jpg";

const MenuComponent = props => {
  return (
    <MenuWrapper id="menu">
      <MenuItem> Menus </MenuItem>
      <MenuItem> Events </MenuItem>
      <MenuItem> Shop </MenuItem>
      <MenuItem> Book Now </MenuItem>
    </MenuWrapper>
  );
};

export default MenuComponent;

// STYLED COMPONENTS
const MenuWrapper = styled.section`
  display: grid;
  grid: auto-flow / 1fr 1fr;
  background-color: black;
  background-image: url(${menuBg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 740px) {
    grid: auto-flow / repeat(4, 1fr);
  }
  &:before {
    content: "";
    display: block;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    transform: rotate(180deg) translateY(80px);
    width: 100%;
    height: 125px;
    background-image: url(${grungeBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    @media (min-width: 740px) {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
    }
  }
  &:after {
    content: "";
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, rgba(0, 0, 0, 0), black);
  }
`;
const MenuItem = styled.div`
  display: grid;
  width: 45vmin;
  height: 45vmin;
  padding: 1em 0;
  z-index: 1;
  font-size: 1.25em;
  align-content: center;
  margin: auto;
  color: white;
  background-image: url(${props => props.bgImg});
`;
