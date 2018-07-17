import React from "react";
import styled from "styled-components";
import fullLogo from "../../../common/assets/img/Industry_fullLogo_sm_wht.svg";
import PhoneButton from "../../../common/components/phone";
import IconButton from "@material-ui/core/IconButton";
import theme from "../../../common/styled/theme";
import { withStyles } from "@material-ui/core";
import { Phone, Facebook, Twitter, Instagram } from "mdi-material-ui";
import TripAdvisor from "../../../common/components/tripadvisor";

const HeaderComponent = props => {
  const { classes, headerLogo } = props;
  return (
    <TopWrapper>
      <TopNav>
        <LogoImg src={headerLogo} />
        <TopMobileButtons>
          <IconButton style={{ color: theme.colors.lightAccent }}>
            <Phone />
          </IconButton>
        </TopMobileButtons>
      </TopNav>
    </TopWrapper>
  );
};

export default withStyles(theme.materialUI)(HeaderComponent);

const TopWrapper = styled.div`
  width: 100vw;
  display: inline-flex;
  position: absolute;
  flex-wrap: wrap;
  height: 65px;
  padding: 0.625rem 0;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 5;
  color: ${props => props.theme.colors.lightAccent};
`;
const TopNav = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`;

const TopMobileButtons = styled.div`
  display: inline-flex;
  float: right;
`;
const LogoImg = styled.img`
  display: flex;
  position: relative;
  max-width: 100px;
  padding: 3px;

  z-index: 5;
  ${props => props.theme.media.tablet_portrait_up`
    height: 60px;
    max-width: 100%;
  `};
`;
