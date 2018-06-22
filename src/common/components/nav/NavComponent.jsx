import React, { Component } from "react";

import styled from "styled-components";
import fullLogo from "../../assets/img/Industry_fullLogo.svg";

export default class NavComponent extends Component {
  // Todo: use state management and move to container

  render() {
    return (
      <NavWrapper>
        <LogoImg />
      </NavWrapper>
    );
  }
}

// STYLED COMPONENTS
// Todo: change bottom-border color
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #252525;
  height: 75px;
  overflow: hidden;
  width: 100%;
  z-index: 100;
  position: absolute;
  border-bottom: 2px solid yellow;
  @media (min-width: 763px) {
  }
`;

const LogoImg = styled.div`
  display: block;
  position: relative;
  background-image: url(${fullLogo});
  background-repeat: no-repeat;
  margin: auto;
  float: left;
  height: 100%;
  width: 100%;
`;
