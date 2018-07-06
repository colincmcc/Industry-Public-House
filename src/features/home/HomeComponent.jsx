import React from "react";
import styled from "styled-components";

import CarouselContainer from "./components/carousel/CarouselContainer";
import AboutContainer from "./components/about/AboutContainer";

const HomeComponent = props => {
  return (
    <HomeWrapper>
      <CarouselContainer />
      <AboutContainer />
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
