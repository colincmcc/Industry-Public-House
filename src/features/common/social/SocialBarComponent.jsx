import React from "react";
import styled from "styled-components";
import Heading from "../../common/Heading";
im;
const SocialBarComponent = props => {
  return (
    <div>
      <div />
    </div>
  );
};

export default SocialBarComponent;

const SocialBarWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.colors.darkGray};
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 125px;
    top: -125px;
    background-image: url(${grungeBorder});
  }
`;
