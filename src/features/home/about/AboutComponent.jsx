import React from "react";
import styled from "styled-components";

// Custom Components
import Heading from "../../common/Heading";
import BodyText from "../../common/BodyText";

// Images
import mainBg from "../../../common/assets/img/zig-zag.png";
import nfPatio from "../../../common/assets/img/nf_patio.jpg";
import lightbulb from "../../../common/assets/img/gear.svg";

// ! Wordpress reverts to "false" for null

const AboutComponent = props => {
  const { bgImg, title, content, heroImg } = props;
  const hasBg = bgImg !== "false";
  const hasHero = heroImg !== "false";
  const aboutBg = hasBg ? bgImg : mainBg;
  const aboutHero = hasHero ? heroImg : nfPatio;
  const aboutPage = (
    <AboutWrapper hasBg={hasBg} bgImg={aboutBg} id="About">
      <AboutBg hasBg={hasBg} bgImg={aboutBg} />
      <Lightbulb src={lightbulb} />

      <Heading text={title} />
      <BodyText>
        <span dangerouslySetInnerHTML={{ __html: content }} />
      </BodyText>
      <ImageList>
        <HeroImg src={aboutHero} />
      </ImageList>
    </AboutWrapper>
  );
  return aboutPage;
};

export default AboutComponent;

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1160px;
  padding: 20px;
  overflow: hidden;
  margin: auto;
`;

const AboutBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.blackTheme};
  background: url(${props => props.bgImg});
  background-size: ${props => (props.hasBg ? "cover" : null)};
  background-repeat: ${props => (props.hasBg ? "no-repeat" : "repeat")};
  max-width: 1060px;
  overflow: hidden;
`;

const ImageList = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  margin: auto;
  padding-top: 20px;
  ${props => props.theme.media.tablet_landscape_up`
    position: absolute;
    right: 0;
    width: 50%;
    top: 25%;
    padding: 36px;
    padding-top: 0px;
  `};
`;
const Lightbulb = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  opacity: 0.2;

  ${props => props.theme.media.tablet_landscape_up`
  width: 100%;
  left: -50%;
`};
`;

const HeroImg = styled.img`
  z-index: 1;
  width: 100%;
  box-shadow: 0 2px 4px 0 ${props => props.theme.colors.darkGray};
`;
