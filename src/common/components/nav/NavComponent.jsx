import React from "react";
import styled from "styled-components";
import fullLogo from "../../assets/img/Industry_fullLogo_sm.svg";

const NavComponent = props => (
  <NavWrapper>
    <LogoImg src={fullLogo} />
    <NavButton
      className={
        props.isActive ? "isActive fa fa-bars fa-2x" : "fa fa-bars fa-2x"
      }
      onClick={() => props.burgerToggle()}
    />
  </NavWrapper>
);

export default NavComponent;

// STYLED COMPONENTS
// Todo: change bottom-border color
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  overflow: hidden;
  width: 100%;
  z-index: 100;
  position: absolute;
  @media (min-width: 763px) {
  }
`;

const LogoImg = styled.img`
  display: flex;

  margin: auto 24px;
  float: left;
  max-width: 100%;
  height: 65px;
`;

const NavButton = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  color: yellow;
  padding: 24px;
  z-index: 101;
  transition: 0.5s;
  @media (min-width: 736px) {
    display: none;
    visibility: hidden;
  }
  &.isActive {
    color: black;
    transform: rotate(90deg);
  }
`;
