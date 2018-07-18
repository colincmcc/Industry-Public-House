import React from "react";
import styled from "styled-components";
import Heading from "../../../common/Heading";
import mainBg from "../../../../common/assets/img/Drinks-Background.jpg";
import nfPatio from "../../../../common/assets/img/nf_patio.jpg";

const AboutComponent = props => {
  const { bgImg, title, content, heroImg } = props;
  return (
    <AboutWrapper bgImg={bgImg} id="About">
      <Heading text={title} />
      <AboutContent dangerouslySetInnerHTML={{ __html: content }} />
      <HeroImg heroImg={heroImg || nfPatio} />
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
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      ${props => props.theme.colors.blackTheme + "80"},
      rgba(0, 0, 0, 0)
    );
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em 2em 2em;
  color: ${props => props.theme.colors.whiteTheme};
  width: 75%;
  margin: auto;
  ${props => props.theme.fontStyles.text};

  ${props => props.theme.media.tablet_landscape_up`
    width: 50%;
    ${props => props.theme.fontStyles.medium};

  `};
  z-index: 1;
`;
const HeroImg = styled.div`
  background: url(${props => props.heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  z-index: 1;
`;
