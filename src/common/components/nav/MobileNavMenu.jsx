import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router";

const MobileNavMenu = props => {
  return (
    // TODO: Fix menu items alignment, make pretty, link to pages
    <NavMenuNarrow className={props.isActive ? "isActive" : ""} id="navNarrow">
      <MenuList>
        <SkewedBlock onClick={() => props.burgerToggle()}>
          <NavNarrowButton to="/Home#About">ABOUT</NavNarrowButton>
        </SkewedBlock>

        <SkewedBlock onClick={() => props.burgerToggle()}>
          <NavNarrowButton to="/Menu">MENU</NavNarrowButton>
        </SkewedBlock>

        <SkewedBlock onClick={() => props.burgerToggle()}>
          <NavNarrowButton to="/Home#About">EVENTS</NavNarrowButton>
        </SkewedBlock>

        <SkewedBlock onClick={() => props.burgerToggle()}>
          <NavNarrowButton to="/Home#About">DRINKS</NavNarrowButton>
        </SkewedBlock>
      </MenuList>
    </NavMenuNarrow>
  );
};

export default withRouter(MobileNavMenu);

// STYLED COMPONENTS

const NavMenuNarrow = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 200px 0 0 0;
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
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

const SkewedBlock = styled.div`
  transform: skewY(-11.5deg);
  display: block;
  width: 100%;
  border-bottom: 1px solid white;
  padding: 1em 0;
  text-align: center;
`;
const NavNarrowButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
  padding: 1em;
`;
