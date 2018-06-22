import React from "react";
import styled from "styled-components";
import fullLogo from "../../assets/img/Industry_fullLogo_sm.svg";
import grungeBanner from "../../assets/img/Grunge_Header.svg";

const NavComponent = props => {
  return (
    <NavWrapper className={props.isActive ? "isActive" : ""}>
      <NavBackground opacity={props.backgroundOpacity} />
      <NavMenu>
        <LogoImg src={fullLogo} />
        <NavButton
          className={
            props.isActive ? "isActive fa fa-bars fa-2x" : "fa fa-bars fa-2x"
          }
          onClick={() => props.burgerToggle()}
        />
      </NavMenu>
    </NavWrapper>
  );
};

export default NavComponent;

// STYLED COMPONENTS
const NavWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  width: 100%;
  z-index: 100;
  position: fixed;

  @media (min-width: 763px) {
  }
`;
const NavBackground = styled.div`
  height: 200px;
  width: 100%;
  position: fixed;
  left: 0;
  background-image: url(${grungeBanner});
  background-size: cover;
  background-repeat: no-repeat;
  transition: 1s;
  z-index: -2;
  opacity: ${props => props.opacity};
`;
const NavMenu = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
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
    transform: rotate(90deg);
  }
`;
