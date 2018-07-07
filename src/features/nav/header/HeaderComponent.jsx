import React from "react";
import styled from "styled-components";
import fullLogo from "../../../common/assets/img/Industry_fullLogo_sm_wht.svg";
const HeaderComponent = () => {
  return (
    <TopWrapper>
      <TopNav>
        <LogoImg src={fullLogo} />
      </TopNav>
    </TopWrapper>
  );
};

export default HeaderComponent;

const TopWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  position: fixed;
  flex-wrap: wrap;
  height: 56px;
  padding: 0.625rem 0;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 5;
`;
const TopNav = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;
const BrandInfo = styled.div`
  padding: 0.625rem 0;
`;
const TopMobileButtons = styled.div`
  padding: 0.25rem 0.75rem;
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
