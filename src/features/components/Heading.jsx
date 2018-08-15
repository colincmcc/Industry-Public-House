import React from "react";
import styled from "styled-components";

const Heading = props => {
  const { style, text, center } = props;
  return (
    <HeaderText center={center} style={style}>
      {text}
    </HeaderText>
  );
};

export default Heading;

// centered boolean determins margin and alignment for component
// Slightly messy because I use a theme function to separate media break-points

const HeaderText = styled.div`
  ${props => props.theme.components.heading};
  text-align: center;
  text-transform: uppercase;
  z-index: 1;

  ${props => props.theme.media.tablet_portrait_up`
    margin: ${(props = props.center ? "30px auto" : "0 25%")};
  `};

  ${props => props.theme.media.tablet_landscape_up`
    width: 50%;
    align-items: center;

    ${(props = `margin-left: ${props.center ? "auto" : "33px"};
        text-align: ${(props = props.center ? "center" : "right")};
      `)}

  `};
`;
