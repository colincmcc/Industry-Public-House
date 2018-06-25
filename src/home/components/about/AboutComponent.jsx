import React from "react";
import styled from "styled-components";

const AboutComponent = props => {
  return (
    <AboutWrapper id="About">
      <AboutHeader> About </AboutHeader>
      <AboutContent
        dangerouslySetInnerHTML={{ __html: props.aboutPage.AboutPage.content }}
      />
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
`;

const AboutHeader = styled.h2`
  display: blcok;
  color: yellow;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  color: white;
`;
