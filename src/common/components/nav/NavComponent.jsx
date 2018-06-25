import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router";
import fullLogo from "../../assets/img/Industry_fullLogo_sm_wht.svg";
import grungeBanner from "../../assets/img/Grunge_Header.svg";

// Using react-router-hash-link in components for semi-future proof link solution until react-router supports it out of the box.

// Hash Link supports url hashes and browser history.  Might need it in the blog portion of the site.

// Todo: make Nav pretty
const NavComponent = props => {
  return (
    <NavWrapper className={props.isActive ? "isActive" : ""}>
      <NavBackground opacity={props.backgroundOpacity} />
      <NavMenu>
        <LogoImg src={fullLogo} />

        {/** Desktop Nav **/}
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

  margin: auto 24px;
  float: left;
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
