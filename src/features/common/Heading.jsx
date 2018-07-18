import React from "react";
import styled from "styled-components";

const Heading = props => {
  return <HeaderText>{props.text}</HeaderText>;
};

export default Heading;

const HeaderText = styled.div`
  ${props => props.theme.components.heading};
  padding: 2em;
  text-transform: uppercase;
  z-index: 1;
`;
