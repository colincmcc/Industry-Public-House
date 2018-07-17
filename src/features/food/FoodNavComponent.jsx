import React, { Component } from "react";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { WP_FOODS } from "./FoodMenuComponent";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import theme from "../../common/styled/theme";

// * Prefetches food items on mouse hover for faster loading

const FoodNavComponent = props => {
  const { classes } = props;
  const currentPath = props.location.pathname;
  let scrollMenu = true;
  window.innerWidth < 760 ? (scrollMenu = true) : (scrollMenu = false);
  return (
    <MenuNavWrapper>
      <Tabs
        centered={scrollMenu ? false : true}
        scrollable={scrollMenu ? true : false}
        scrollButtons="auto"
        value={currentPath}
        classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
      >
        {props.navItems.map((navItem, index) => (
          <Tab
            key={shortid.generate()}
            label={navItem.label}
            value={navItem.link}
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected
            }}
            component={Link}
            to={navItem.link}
          />
        ))}
      </Tabs>
    </MenuNavWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(FoodNavComponent));

const MenuNavWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 2em 2em;
  padding-top: 56px;
`;

const FoodHeader = styled.div`
  ${props => props.theme.components.heading};
  width: 100%;
  padding-top: 2em;
`;
const MenuNavItem = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSizes.medium.size};
  padding: 1em;
  margin: auto;
  text-transform: uppercase;
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.lightTheme};
  }
`;
