import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import shortid from "shortid";
import { Menu, Food, Email } from "mdi-material-ui";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { withStyles } from "@material-ui/core/styles";
import LightbulbLogo from "../../common/components/lightbulb";
import BeerGlass from "../../common/components/beerglass";

import grungeBanner from "../../common/assets/img/Grunge_Header.svg";
import theme from "../../common/styled/theme";

class MobileNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  /** TODO: bottom nav needs to select the correct navItem when directly linked to a page
  componentDidMount() {
    var currentPath = this.props.location.toString().toLowerCase();
    let currentLoc;
    if (currentPath.startsWith("/drink")) {
      currentLoc = 1;
    } else if (currentPath.startsWith("/food")) {
      currentLoc = 2;
    } else if (currentPath.startsWith("/contact")) {
      currentLoc = 3;
    } else if (currentPath.startsWith("/menu")) {
      currentLoc = 4;
    }

    this.setState({
      value: currentLoc
    });
  }
   */
  handleChange = (event, value) => {
    this.setState({ value: value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    const bottomNavItems = [
      {
        link: "/Home",
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
      { link: "/Food", text: "Food", slug: "food", icon: <Food /> },
      { link: "/Contact", text: "Contact", slug: "contact", icon: <Email /> },
      { link: "/", text: "Menu", slug: "menu", icon: <Menu /> }
    ];
    return (
      <NavWrapper className={this.props.navIsShown ? "" : "hide"}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.bottomNavRoot }}
        >
          {bottomNavItems.map((navItem, index) => (
            <BottomNavigationAction
              key={shortid.generate()}
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
  }
}

export default withStyles(theme.materialUI)(MobileNavComponent);

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

  ${props => props.theme.media.tablet_landscape_up`
    display: none;
    visibility: hidden;
  `};
`;

const MobileItem = styled.div`
  min-width: 80px;
  max-width: 168px;
  line-height: 0;
  padding-top: 16px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${props => props.theme.colors.whiteTheme};

  &.selected {
    padding-top: 6px;
    color: ${props => props.theme.colors.lightAccent};
  }
  &.iconOnly {
    opacity: 0;
    transition-delay: 0s;
  }
`;

const MobileSVG = styled.span``;
const MobileValue = styled.span`
  font-size: 0.875rem;
  opacity: 0;

  &.selected {
    opacity: 1;
    transition-delay: 0.1s;
    padding-top: 10px;
  }
`;
