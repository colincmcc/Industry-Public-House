import React from "react";
import styled from "styled-components";
import Heading from "../../common/Heading";
import mainBg from "../../../common/assets/img/zig-zag.png";
import nfPatio from "../../../common/assets/img/nf_patio.jpg";
import PageWrapper from "../../common/page/PageWrapper";
import lightbulb from "../../../common/assets/img/gear.svg";
import grungeBorder from "../../../common/assets/img/grunge_border_v2.svg";

// ! Wordpress reverts to "false" for null
const AboutComponent = props => {
  const { bgImg, title, content, heroImg } = props;
  const hasBg = bgImg !== "false";
  const hasHero = heroImg !== "false";
  const aboutBg = hasBg ? bgImg : mainBg;
  const aboutHero = hasHero ? heroImg : nfPatio;
  const aboutPage = (
    <AboutWrapper hasBg={hasBg} bgImg={aboutBg} id="About">
      <Lightbulb />
      <Heading text={title} />
      <AboutContent dangerouslySetInnerHTML={{ __html: content }} />
      <HeroImg hasHero={hasHero} heroImg={aboutHero} />
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

  background-color: ${props => props.theme.colors.blackTheme};
  background: url(${props => props.bgImg});
  background-size: ${props => (props.hasBg ? "cover" : null)};
  background-repeat: ${props => (props.hasBg ? "no-repeat" : "repeat")};
  max-width: 1600px;
  margin: auto;
`;
const Lightbulb = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  opacity: 0.2;
  background-image: url(${lightbulb});
  background-position: center;
  background-repeat: no-repeat;
  ${props => props.theme.media.tablet_landscape_up`
  width: 100%;
  left: -50%;
  background-size: cover;



`};
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
