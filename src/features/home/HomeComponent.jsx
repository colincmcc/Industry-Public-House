import React from "react";
import styled from "styled-components";

import HeaderContainer from "./components/header/HeaderContainer";
import AboutContainer from "./components/about/AboutContainer";
import MenuContainer from "./components/menu/MenuContainer";
import FoodContainer from "./components/food/FoodContainer";
import mainBg from "../../common/assets/img/Drinks-Background.jpg";

const HomeComponent = props => {
  const headerBackground = props.wpData.HeaderPage.backgroundImageField.value;
  return (
    <HomeWrapper>
      <HeaderContainer />
      <MenuContainer />
      <MainContent>
        <AboutContainer />
        <FoodContainer />
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
  background-position: bottom;
  background-size: cover;
  z-index: 2;
`;

const MenuContent = styled.div`
  display: grid;
`;
