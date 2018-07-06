import React from "react";
import styled from "styled-components";

const WideNavComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default WideNavComponent;

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
