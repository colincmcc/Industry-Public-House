import React from "react";
import Gear from "../../../common/assets/img/gear.svg";
import styled, { keyframes } from "styled-components";

export default props => {
  return (
    <LoadingWrapper {...props}>
      <Loader {...props}>
        <SpinningGear />
      </Loader>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  height: ${props => (props.large ? "100vh" : "100%")};
  width: 100%;
  background-color: transparent;
  margin: auto;
  padding: 1rem;
`;

const outerAnim = keyframes`
0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: inline-block;
  width: ${props => (props.large ? "80px" : "40px")};
  height: ${props => (props.large ? "80px" : "40px")};
  margin: auto;
`;

const SpinningGear = styled(Gear)`
  color: ${props => props.theme.colors.lightAccent};
  animation: ${outerAnim} 3s infinite linear;
`;
