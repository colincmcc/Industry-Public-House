import React from "react";
import styled from "styled-components";
const BodyText = props => {
  return <BodyTextWrapper>{props.children}</BodyTextWrapper>;
};

export default BodyText;

const BodyTextWrapper = styled.div`
  ${props => props.theme.fontStyles.text};
  padding-top: 35px;
  z-index: 1;
  color: ${props => props.theme.colors.whiteTheme};

  ${props => props.theme.media.tablet_landscape_up`
    width: 50%;
    text-align: right;
    ${props => props.theme.fontStyles.medium};
  `};
`;
