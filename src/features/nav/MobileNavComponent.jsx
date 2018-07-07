import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import shortid from "shortid";

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { withStyles } from "@material-ui/core/styles";
import { Menu, Food, Email } from "mdi-material-ui";
import SvgIcon from "@material-ui/core/SvgIcon";

import barsSVG from "../../common/assets/icons/bars-solid.svg";
import beerSVG from "../../common/assets/icons/beer-solid.svg";
import contactSVG from "../../common/assets/icons/envelope-regular.svg";
import foodSVG from "../../common/assets/icons/utensils-solid.svg";
import LightbulbLogo from "../../common/components/lightbulb";

import "./nav.css";
import grungeBanner from "../../common/assets/img/Grunge_Header.svg";

const styles = {
  root: {
    width: "100%"
  }
};

class MobileNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "home"
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    console.log(value);
    const bottomNavItems = [
      { link: "/Home", text: "Home", slug: "home", icon: <LightbulbLogo /> },
      {
        link: "/drink",
        text: "Drinks",
        slug: "drinks",
        icon: <LightbulbLogo />
      },
      { link: "/food", text: "Food", slug: "food", icon: <Food /> },
      { link: "/", text: "Contact", slug: "contact", icon: <Email /> },
      { link: "/", text: "Menu", slug: "menu", icon: <Menu /> }
    ];

    return (
      <NavWrapper className={this.props.navIsShown ? "" : "hide"}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >

        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          {/* bottomNavItems.map(navItem => (
            <Link to={navItem.link}>
              <MobileButton
                onClick={() => this.handleChange(navItem.slug)}
                classes={{
                  root: "classes-state-root",
                  selected: "selected"
                }}
                value={value}
                label={navItem.text}
                icon={navItem.icon}
              />
              {/* <ReactSVG svgStyle={svgStyle} path={navItem.icon} /> */}
            </Link>
          ))
        */}
        </BottomNav>
      </NavWrapper>
    );
  }
}

export default withStyles(styles)(MobileNavComponent);

// STYLED COMPONENTS
const NavWrapper = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  z-index: 100;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  color: ${props => props.theme.colors.whiteTheme};
  background-color: ${props => props.theme.colors.blackTheme};
  border-top: 2px solid ${props => props.theme.colors.theme};
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  &.hide {
    transform: translate3d(0, 100%, 0);
  }

  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;

const BottomNav = styled(BottomNavigation)`
  && {
    width: 100%;
    background-color: ${props => props.theme.colors.blackTheme};
  }
`;

const MobileButton = styled(BottomNavigationAction)`
  && {
    color: ${props => props.theme.colors.whiteTheme};
  }
`;

const MobileItem = styled.button`
  min-width: 80px;
  max-width: 168px;
  line-height: 0;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  display: inline-flex;
  background-color: transparent;
  border: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &.isActive {
    padding-top: 6px;
    color: blue;
  }
  &.iconOnly {
    opacity: 0;
    transition-delay: 0s;
  }
`;

const BurgerButton = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  padding: 24px;
  z-index: 101;
  transition: 0.5s;
  &.isActive {
    transform: rotate(90deg);
  }
`;

const PhoneButton = styled.i`
  position: absolute;
  left: 0;
  top: 0;
  padding: 24px;
  z-index: 101;
  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;
