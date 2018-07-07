import React from "react";
import styled from "styled-components";
import fullLogo from "../../common/assets/img/Industry_fullLogo_sm_wht.svg";
const HeaderComponent = () => {
  return (
    <TopWrapper>
      <LogoImg src={fullLogo} />
    </TopWrapper>
  );
};

export default HeaderComponent;

const TopWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;
  height: 56px;
  background-color: transparent;
  z-index: 5;
`;
const LogoImg = styled.img`
  display: inline-flex;
  position: relative;
  float: left;
  margin: auto;
  height: 50px;
  padding: 3px;

  z-index: 5;
`;
