import React from "react";
import styled from "styled-components";

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
  width: 100%;
  height: 100%;
  text-align: center;
  &:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, rgba(0, 0, 0, 0));
    z-index: -1;
  }
  }
`;

const AboutHeader = styled.h2`
  display: blcok;
  color: yellow;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  color: white;
  width: 75%;
  margin: auto;
  @media (min-width: 740px) {
    width: 50%;
  }
`;
