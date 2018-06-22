import React from "react";
import styled from "styled-components";

const HeaderComponent = props => {
  const HeaderWrapper = styled.section`
    display: block;
    bottom: 0;
    top: auto;
    background-image: url(${props.bgImg});
    background-size: cover;
    height: 100vh;
    width: 100%;
    @media (min-width: 763px);
  `;

  return (
    <HeaderWrapper id="header">
      <div />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
