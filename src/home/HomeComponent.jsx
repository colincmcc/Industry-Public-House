import React from "react";
import styled from "styled-components";

import HeaderContainer from "./components/header/HeaderContainer";
import AboutContainer from "./components/about/AboutContainer";
import Food from "./components/food/FoodContainer";
import MenuContainer from "./components/menu/MenuContainer";
import mainBg from "../common/assets/img/Drinks-Background.jpg";

const HomeComponent = props => {
  const headerBackground = props.wpData.HeaderPage.backgroundImageField.value;
  console.log(headerBackground);
  return (
    <HomeWrapper>
      <HeaderContainer />
      <MenuContainer />
      <MainContent>
        <AboutContainer />
        <Food />
      </MainContent>
      <MenuContent />
    </HomeWrapper>
  );
};

export default HomeComponent;

const HomeWrapper = styled.div`
  display: grid;

  @media (min-width: 763px) {
  }
`;

const MainContent = styled.div`
  display: grid;
  background-image: url(${mainBg});
  background-position: center;
  background-size: cover;
  z-index: 2;
  padding-top: 1em;
  &:before {
    content: "";
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    position: absolute;
    width: 100%;
    height: 100px;
    background: linear-gradient(black, rgba(0, 0, 0, 0));
    z-index: -1;
  }
`;

const MenuContent = styled.div`
  display: grid;
`;
