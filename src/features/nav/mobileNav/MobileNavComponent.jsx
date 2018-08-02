import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import shortid from "shortid";
import Menu from "../../../common/assets/icons/menu.svg";
import Food from "../../../common/assets/icons/food.svg";
import Email from "../../../common/assets/icons/email.svg";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { withStyles } from "@material-ui/core/styles";
import LightbulbLogo from "../../common/svgIcons/lightbulb";
import BeerGlass from "../../common/svgIcons/beerglass";
import theme from "../../../common/styled/theme";

const MobileNavComponent = props => {
  const { classes, menuIsShown, navIsShown } = props;
  const currentPath = props.location.pathname;

  const bottomNavItems = [
    {
      link: "/",
      text: "Home",
      slug: "home",
      icon: <LightbulbLogo />
    },
    {
      link: "/Drink",
      text: "Drinks",
      slug: "drinks",
      icon: <BeerGlass />
    },
    {
      link: "/Food",
      text: "Food",
      slug: "food",
      icon: <Food width={24} height={24} />,
      onClick: {}
    },
    {
      link: "/Contact",
      text: "Contact",
      slug: "contact",
      icon: <Email />
    },
    {
      link: { pathname: "#Menu", state: { modal: true } },
      text: "Menu",
      slug: "menu",
      icon: <Menu width={24} height={24} />
    }
  ];

  return (
    <NavWrapper className={navIsShown ? " " : "hide "}>
      <BottomNavigation
        value={currentPath.substr(0, 4)}
        classes={{ root: classes.bottomNavRoot }}
      >
        {bottomNavItems.map(navItem => (
          <BottomNavigationAction
            key={shortid.generate()}
            value={
              navItem.slug != "menu" ? navItem.link.substr(0, 4) : navItem.slug
            }
            label={navItem.text}
            icon={navItem.icon}
            component={Link}
            to={navItem.link}
            classes={{
              root: classes.bottomActionRoot,
              selected: classes.bottomActionSelected
            }}
          />
        ))}
      </BottomNavigation>
    </NavWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(MobileNavComponent));

// STYLED COMPONENTS
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  z-index: 100;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  background-color: ${props => props.theme.colors.blackTheme};
  border-top: 2px solid ${props => props.theme.colors.theme};
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  &.hide {
    transform: translate3d(0, 100%, 0);
  }
  &.slide {
    transform: translate3d(-100%, 0, 0);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;
