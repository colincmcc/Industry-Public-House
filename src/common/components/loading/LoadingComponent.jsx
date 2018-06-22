import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <LoadingWrapper>
      <p> ...Loading </p>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #252525;
  margin: auto;
`;
