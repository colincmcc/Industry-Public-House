import React from "react";
import styled, { ThemeProvider } from "styled-components";

import HeaderContainer from "./components/header/HeaderContainer";
import AboutContainer from "./components/about/AboutContainer";
import MenuContainer from "./components/menu/MenuContainer";
import FoodContainer from "./components/food/FoodContainer";
import DrinkContainer from "./components/drinks/DrinkContainer";
import theme from "../../common/styled/theme";

const HomeComponent = props => {
  return (
    <HomeWrapper>
      <HeaderContainer />
      <AboutContainer />
      <FoodContainer selectedFoodType={props.cachedState.selectedFoodType} />
      <DrinkContainer cachedState={props.cachedState} />
    </HomeWrapper>
  );
};

export default HomeComponent;

const HomeWrapper = styled.div`
  display: grid;
`;

const MenuContent = styled.div`
  display: grid;
`;
