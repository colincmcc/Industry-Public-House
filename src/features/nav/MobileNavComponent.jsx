import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import shortid from "shortid";

import { withRouter } from "react-router";

import barsSVG from "../../common/assets/icons/bars-solid.svg";
import beerSVG from "../../common/assets/icons/beer-solid.svg";
import contactSVG from "../../common/assets/icons/envelope-regular.svg";
import lightbulbSVG from "../../common/assets/icons/lightbulb_solo.svg";
import foodSVG from "../../common/assets/icons/utensils-solid.svg";

import grungeBanner from "../../common/assets/img/Grunge_Header.svg";

const MobileNavComponent = props => {
  const svgStyle = {
    width: "50%",
    height: "50%"
  };
  const bottomNavItems = [
    { link: "/Home", text: "Home", icon: lightbulbSVG },
    { link: "/drink", text: "Drinks", icon: beerSVG },
    { link: "/food", text: "Food", icon: foodSVG },
    { link: "/", text: "Contact", icon: contactSVG },
    { link: "/", text: "Menu", icon: barsSVG }
  ];
  return (
    <NavWrapper className={props.navIsShown ? "" : "hide"}>
      <NavMenu>
        {bottomNavItems.map(navItem => (
          <MobileItem key={shortid.generate()}>
            <Link to={navItem.link}>
              <ReactSVG svgStyle={svgStyle} path={navItem.icon} />
            </Link>
          </MobileItem>
        ))}
      </NavMenu>
    </NavWrapper>
  );
};

export default withRouter(MobileNavComponent);

// STYLED COMPONENTS
const NavWrapper = styled.div`
  display: flex;
  height: 80px;
  overflow: hidden;
  width: 100vw;
  z-index: 100;
  position: fixed;
  left: 0;
  bottom: 0;
  color: ${props => props.theme.colors.theme};
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

const NavMenu = styled.ul`
  height: 80px;
  width: 100%;
  display: table;
  z-index: 101;
  padding: 0;
  margin: 0;
`;

const MobileItem = styled.li`
  display: table-cell;
  list-style: none;
  width: 20%;
  line-height: 0;
  padding: 10px;
  position: relative;
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
