import React from "react";
import styled from "styled-components";

const HeaderComponent = props => {
  return (
    <HeaderWrapper bgImg={props.bgImg} id="header">
      <div />
    </HeaderWrapper>
  );
};

export default HeaderComponent;

const HeaderWrapper = styled.section`
  display: block;
  bottom: 0;
  top: auto;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  height: 95vmax;
  width: 100%;
  @media (min-width: 763px);
`;
