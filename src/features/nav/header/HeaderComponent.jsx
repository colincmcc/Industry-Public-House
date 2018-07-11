import React from "react";
import styled from "styled-components";
import fullLogo from "../../../common/assets/img/Industry_fullLogo_sm_wht.svg";
import PhoneButton from "../../../common/components/phone";
import ButtonBase from "@material-ui/core/ButtonBase";
import theme from "../../../common/styled/theme";
import { withStyles } from "@material-ui/core";
import { Phone } from "mdi-material-ui";
import TripAdvisor from "../../../common/components/tripadvisor";
const HeaderComponent = props => {
  const classes = props;
  return (
    <TopWrapper>
      <TopNav>
        <LogoImg src={fullLogo} />
        <TopMobileButtons>
          <ButtonBase classes={{ root: classes.buttonRoot }}>
            <ActionIcon>
              <TripAdvisor style={{ color: theme.colors.lightAccent }} />
            </ActionIcon>
          </ButtonBase>
          <ButtonBase classes={{ root: classes.buttonRoot }}>
            <ActionIcon>
              <Phone style={{ color: theme.colors.lightAccent }} />
            </ActionIcon>
          </ButtonBase>
          <ButtonBase classes={{ root: classes.buttonRoot }}>
            <ActionIcon>
              <Phone style={{ color: theme.colors.lightAccent }} />
            </ActionIcon>
          </ButtonBase>
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
  padding: 0 15px;
`;
const ActionIcon = styled.div`
  display: flex;
  padding: 12px;
  min-width: 32px;
  max-width: 168px;
  margin: auto;
  justify-content: center;
`;
const TopSVG = styled.svg``;
const BrandInfo = styled.div`
  padding: 0.625rem 0;
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
`;
