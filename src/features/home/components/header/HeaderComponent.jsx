import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import shortid from "shortid";

const HeaderComponent = props => {
  return (
    // TODO: add translucent black overlay on images to make text pop
    <HeaderWrapper id="Header">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={200}
        totalSlides={props.headers.length}
      >
        <Slider>
          {props.headers.map((header, index) => (
            <Slide key={shortid.generate()} index={index}>
              <HeaderContainer
                className="headerContainer"
                key={shortid.generate()}
                bgImg={header.background}
              >
                <HeaderContent>
                  <HeaderText
                    dangerouslySetInnerHTML={{
                      __html: header.content || "<br />"
                    }}
                  />
                  <HeaderLink> {header.title} </HeaderLink>
                </HeaderContent>
              </HeaderContainer>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </HeaderWrapper>
  );
};

export default HeaderComponent;

const HeaderWrapper = styled.section`
  height: 95vh;
  width: 100vw;
  color: ${props => props.theme.colors.whiteTheme};
`;

const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 95vh;
  width: 100%;
`;

const HeaderContent = styled.div`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeaderText = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  font-size: ${props => props.theme.fontSizes.heading.size};
  padding: 0 1em;
`;

const HeaderLink = styled.div`
  margin: auto;
  position: relative;
  margin-top: 3em;
  font-size: ${props => props.theme.fontSizes.subHeading.size};
`;
