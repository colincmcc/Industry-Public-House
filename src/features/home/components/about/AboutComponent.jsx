import React from "react";
import styled from "styled-components";

import mainBg from "../../../../common/assets/img/Drinks-Background.jpg";
import nfPatio from "../../../../common/assets/img/nf_patio.jpg";

const AboutComponent = props => {
  return (
    <AboutWrapper bgImg={props.bgImg} id="About">
      <AboutHeader> {props.title} </AboutHeader>
      <AboutContent dangerouslySetInnerHTML={{ __html: props.content }} />
      <HeroImg heroImg={props.heroImg} />
    </AboutWrapper>
  );
};

export default AboutComponent;

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url(${props => props.bgImg});
  background-position: center bottom;
  background-size: cover;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      ${props => props.theme.colors.blackTheme + "80"},
      rgba(0, 0, 0, 0)
    );
    z-index: -1;
  }
`;

const AboutHeader = styled.div`
  ${props => props.theme.components.heading};
  padding-top: 2em;
  text-transform: uppercase;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  color: ${props => props.theme.colors.whiteTheme};
  width: 75%;
  margin: auto;
  ${props => props.theme.fontStyles.text};

  ${props => props.theme.media.tablet_landscape_up`
    width: 50%;
    ${props => props.theme.fontStyles.medium};

  `};
`;
const HeroImg = styled.div`
  background: url(${props => props.heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
`;
