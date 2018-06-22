import React from "react";
import styled from "styled-components";

import HeaderComponent from "./components/header/HeaderComponent";
import Food from "./components/food/FoodContainer";

const HomeComponent = props => {
  const headerBackground = props.wpData.HeaderPage.backgroundImageField.value;
  console.log(headerBackground);
  return (
    <HomeWrapper>
      <HeaderComponent bgImg={headerBackground} />
      <Food />
    </HomeWrapper>
  );
};

export default HomeComponent;

const HomeWrapper = styled.div`
  display: grid;

  @media (min-width: 763) {
  }
`;
