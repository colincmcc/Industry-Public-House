import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router";

import fullLogo from "../../common/assets/img/Industry_fullLogo_sm_wht.svg";
import grungeBanner from "../../common/assets/img/Grunge_Header.svg";

// Using react-router-hash-link in components for semi-future proof link solution until react-router supports it out of the box.

// Hash Link supports url hashes and browser history.  Might need it in the blog portion of the site.

// Todo: make Nav pretty
const NavComponent = props => {
  return (
    <NavWrapper className={props.isActive ? "isActive" : ""}>
      <NavBackground opacity={props.backgroundOpacity} />
      <NavMenu>
        <PhoneButton className="fa-2x fa-phone alt" />
        <LogoImg src={fullLogo} />

        {/** Desktop Nav
        <WideNav id="WideNav">
          <NavLink>
            <Link smooth to="/Home#Header">
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link smooth to="/Home#About">
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/Menu">Menu</Link>
          </NavLink>
        </WideNav>
        **/}

        {/** Mobile Nav **/}
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

export default withRouter(NavComponent);

// STYLED COMPONENTS
const NavWrapper = styled.div`
  height: 100px;
  overflow: hidden;
  width: 100vw;
  z-index: 100;
  position: fixed;
  color: ${props => props.theme.colors.theme};
`;
const NavBackground = styled.div`
  height: 100px;
  width: 100%;
  position: fixed;
  left: 0;
  background-color: ${props => props.theme.colors.blackTheme};
  border-bottom: 2px solid ${props => props.theme.colors.theme};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  margin: auto;
  max-width: 100%;
  height: 65px;
`;
const WideNav = styled.nav`
  display: none;
  @media (min-width: 736px) {
    display: inline-flex;
    flex-direction: row;
    width: 100%;
    text-align: center;
    padding: 1em;
  }
`;
const NavLink = styled.div`
  display: flex;
  padding: 0.5em;
  color: white;
  text-align: center;
  width: 100%;
`;

const NavButton = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  padding: 24px;
  z-index: 101;
  transition: 0.5s;
  &.isActive {
    transform: rotate(90deg);
  }

  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;

const PhoneButton = styled.i`
  position: absolute;
  left: 0;
  top: 0;
  padding: 24px;
  z-index: 101;
  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;
