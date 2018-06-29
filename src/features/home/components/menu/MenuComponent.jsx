import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router";
import shortid from "shortid";
import grungeBanner from "../../../../common/assets/img/Grunge_Header.svg";
import lightBg from "../../../../common/assets/img/gerrie-van-der-walt-469060-unsplash.jpg";
import menuBg from "../../../../common/assets/img/Gallery-Background.jpg";
import lightbulb from "../../../../common/assets/img/lightbulb_frame.svg";
import lightbulbLit from "../../../../common/assets/img/lightbulb_frame_light.svg";

const MenuComponent = props => {
  const quickNavItems = [
    { title: "Menus", link: "/Headers#About" },
    { title: "Events", link: "/Events" },
    { title: "Shop", link: "/Shop" },
    { title: "Book Now", link: "/Book" }
  ];
  return (
    <MenuWrapper id="menu">
      <BackgroundFix />
      {quickNavItems.map(navItem => (
        <MenuItem key={shortid.generate()}>{navItem.title}</MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default withRouter(MenuComponent);

// STYLED COMPONENTS
const MenuWrapper = styled.section`
  display: grid;
  grid: auto-flow / 1fr 1fr;
  background-color: black;
  background-image: url(${menuBg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 740px) {
    grid: auto-flow / repeat(4, 1fr);
  }
  &:before {
    content: "";
    display: block;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    transform: rotate(180deg) translateY(80px);
    width: 100%;
    height: 125px;
    background-image: url(${grungeBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    @media (min-width: 740px) {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, rgba(0, 0, 0, 0), black);
  }
`;
const BackgroundFix = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  @media (min-width: 740px) {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }
`;
const MenuItem = styled.div`
  display: grid;
  width: 100%;
  height: 45vmin;
  padding: 1em 0;
  z-index: 1;
  font-size: 1.5em;
  align-content: center;
  margin: auto;
  color: white;
  background-color: rgb(0, 0, 0, 0.4);
  cursor: default;
  &:hover {
    background: radial-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.4));
  }
`;
