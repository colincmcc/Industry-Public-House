import React from "react";

import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import IconButton from "@material-ui/core/IconButton";
import { Phone, Facebook, Twitter, Instagram } from "mdi-material-ui";
import theme from "../../../common/styled/theme";
import mobileNavItems from "../NavContainer";

const HeaderComponent = props => {
  const { classes, headerLogo, location } = props;
  return (
    <TopWrapper>
      <TopNav>
        <LogoImg src={headerLogo} />
        <TopNav>
          <Tabs
            value={location.pathname}
            classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
          >
            {mobileNavItems.map(navItem => (
              <Tab
                centered
                component={Link}
                to={navItem.link}
                value={navItem.link}
                label={navItem.label}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected
                }}
              />
            ))}
          </Tabs>
        </TopNav>
        <TopMobileButtons>
          <IconButton style={{ color: theme.colors.lightAccent }}>
            <Phone />
          </IconButton>
        </TopMobileButtons>
      </TopNav>
    </TopWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(HeaderComponent));

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

const NavItem = styled.div``;
const TopMobileButtons = styled.div`
  display: inline-flex;
  float: right;
  ${props => props.theme.media.tablet_portrait_up`
  display: none;
  `};
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
