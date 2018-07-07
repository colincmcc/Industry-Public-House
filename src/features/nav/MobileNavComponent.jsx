import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import shortid from "shortid";

import { withStyles } from "@material-ui/core/styles";
import { Menu, Food, Email } from "mdi-material-ui";
import ButtonBase from "@material-ui/core/ButtonBase";
import LightbulbLogo from "../../common/components/lightbulb";
import BeerGlass from "../../common/components/beerglass";

import grungeBanner from "../../common/assets/img/Grunge_Header.svg";
import theme from "../../common/styled/theme"

class MobileNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "home"
    };
  }
  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    const bottomNavItems = [
      {
        link: "/Home",
        text: "Home",
        slug: "home",
        icon: (
          <LightbulbLogo
            primaryColor={value === "home" ? theme.colors.theme : ""}
            secondaryColor={value === "home" ? theme.colors.lightAccent : ""}
          />
        )
      },
      {
        link: "/drink",
        text: "Drinks",
        slug: "drinks",
        icon: <BeerGlass />
      },
      { link: "/food", text: "Food", slug: "food", icon: <Food /> },
      { link: "/", text: "Contact", slug: "contact", icon: <Email /> },
      { link: "/", text: "Menu", slug: "menu", icon: <Menu /> }
    ];

    return (
      <NavWrapper className={this.props.navIsShown ? "" : "hide"}>
        {bottomNavItems.map(navItem => (
          <Link
            key={shortid.generate()}
            style={{ width: "20%" }}
            to={navItem.link}
          >
            <ButtonBase >
              <MobileItem
                className={value === navItem.slug ? "selected" : ""}
                onClick={() => this.handleChange(navItem.slug)}
              >
                <MobileSVG>{navItem.icon} </MobileSVG>
                <MobileValue
                  className={value === navItem.slug ? "selected" : ""}
                >
                  {navItem.text}{" "}
                </MobileValue>
              </MobileItem>
              {/* <ReactSVG svgStyle={svgStyle} path={navItem.icon} /> */}
            </ButtonBase>
          </Link>
        ))}
      </NavWrapper>
    );
  }
}

export default withTheme(MobileNavComponent);

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
