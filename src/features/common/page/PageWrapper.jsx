import React from "react";
import styled from "styled-components";

const PageWrapper = props => {
  const { children } = props;
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default PageWrapper;
const SectionWrapper = styled.div`
  box-sizing: border-box;
  ${props => props.theme.media.tablet_portrait_up`
  margin: auto;
  padding: 2em;
  background-color: ${props => props.theme.colors.whiteTheme};
  width: 100%;`};
`;
