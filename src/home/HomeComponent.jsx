import React from "react";
import styled from "styled-components";

import HeaderComponent from "./components/header/HeaderComponent";
import AboutContainer from "./components/about/AboutContainer";
import Food from "./components/food/FoodContainer";
import MenuContainer from "./components/menu/MenuContainer";

const HomeComponent = props => {
  const headerBackground = props.wpData.HeaderPage.backgroundImageField.value;
  console.log(headerBackground);
  return (
    <HomeWrapper>
      <HeaderComponent bgImg={headerBackground} />
      <MenuContainer />
      <AboutContainer />
      <Food />
    </HomeWrapper>
  );
};

export default HomeComponent;

const HomeWrapper = styled.div`
  display: grid;

  @media (min-width: 763px) {
  }
`;
