import React from "react";
import styled from "styled-components";

const MobileNavMenu = props => {
  return (
    // TODO: Fix menu items alignment, make pretty, link to pages
    <NavMenuNarrow className={props.isActive ? "isActive" : ""} id="navNarrow">
      <MenuList>
        <li width="100%">
          <SkewedBlock>
            <NavNarrowButton href="#about">ABOUT</NavNarrowButton>
          </SkewedBlock>
        </li>
        <li width="100%">
          <SkewedBlock>
            <NavNarrowButton href="#tickets">TICKETS</NavNarrowButton>
          </SkewedBlock>
        </li>
        <li width="100%">
          <SkewedBlock>
            <NavNarrowButton href="#bands">BANDS</NavNarrowButton>
          </SkewedBlock>
        </li>
        <li width="100%">
          <SkewedBlock>
            <NavNarrowButton href="#brews">BREWS</NavNarrowButton>
          </SkewedBlock>
        </li>

        <li width="100%">
          <SkewedBlock>
            <NavNarrowButton href="#vendors">VENDORS</NavNarrowButton>
          </SkewedBlock>
        </li>
        <li width="100%">
          <SkewedBlock>
            <NavNarrowButton href="#info">INFO</NavNarrowButton>
          </SkewedBlock>
        </li>
      </MenuList>
    </NavMenuNarrow>
  );
};

export default MobileNavMenu;

// STYLED COMPONENTS

const NavMenuNarrow = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #252525;
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: 2em;
  transition: 0.5s;
  transform: scale(0, 0);
  transform-origin: top right;
  z-index: 99;

  &.isActive {
    display: flex;
    transform: scale(1, 1);
    opacity: 1;
  }
`;
const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  width: 100%;
`;

const SkewedBlock = styled.div`
  transform: skewY(-11.5deg);
  display: block;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 1em;
  text-align: center;
`;
const NavNarrowButton = styled.a`
  display: block;
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1em;
`;
