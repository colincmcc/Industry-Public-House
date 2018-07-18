import React from "react";
import shortid from "shortid";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import IconButton from "@material-ui/core/IconButton";
import { Phone, Facebook, Twitter, Instagram } from "mdi-material-ui";
import theme from "../../../common/styled/theme";
import { mobileNavItems } from "../NavContainer";

const HeaderComponent = props => {
  const { classes, headerLogo, location } = props;
  console.log(mobileNavItems);
  return (
    <TopWrapper>
      <NavContents>
        <LogoImg src={headerLogo} />
        <TopNav>
          <TopNav>
            <Tabs
              value={location.pathname}
              classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
            >
              {mobileNavItems.map(navItem => (
                <Tab
                  key={shortid.generate()}
                  centered="true"
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
        </TopNav>
        <TopMobileButtons>
          <IconButton style={{ color: theme.colors.lightAccent }}>
            <Phone />
          </IconButton>
        </TopMobileButtons>
      </NavContents>
    </TopWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(HeaderComponent));

const TopWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  box-sizing: border-box;
  position: absolute;
  height: 65px;
  padding: 16px 32px;

  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 5;
  color: ${props => props.theme.colors.lightAccent};
`;
const NavContents = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;
const TopNav = styled.div`
  display: none;
  ${props => props.theme.media.tablet_landscape_up`

  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

`};
`;

const TopMobileButtons = styled.div`
  display: inline-flex;
  align-items: center;
  height: 60px;
  ${props => props.theme.media.tablet_portrait_up`
  display: none;
  `};
`;
const LogoImg = styled.img`
  display: flex;
  position: relative;
  max-width: 100px;
  height: 60px;
  z-index: 5;
  ${props => props.theme.media.tablet_portrait_up`
    height: 80px;
    max-width: 100%;
  `};
`;
