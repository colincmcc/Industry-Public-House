import React from "react";
import styled from "styled-components";

import mainBg from "../../../../common/assets/img/Drinks-Background.jpg";

const AboutComponent = props => {
  return (
    <AboutWrapper id="About">
      <AboutHeader> {props.title} </AboutHeader>
      <AboutContent dangerouslySetInnerHTML={{ __html: props.content }} />
    </AboutWrapper>
  );
};

export default AboutComponent;

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  text-align: center;
  &:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(${props => props.theme.colors.blackTheme}
    , rgba(0, 0, 0, 0));
    z-index: -1;
  }
  }
`;

const AboutHeader = styled.h2`
  display: block;
  color: ${props => props.theme.colors.lightTheme};
  margin: auto;
  padding-top: 3em;
  font-size: ${props => props.theme.fontSizes.subHeading.size};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  color: ${props => props.theme.colors.whiteTheme};
  width: 75%;
  margin: auto;
  font-size: ${props => props.theme.fontSizes.text.size};

  ${props => props.theme.media.tablet_landscape_up`
    width: 50%;
  `};
`;
