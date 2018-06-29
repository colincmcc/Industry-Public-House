import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
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
                <HeaderText
                  dangerouslySetInnerHTML={{
                    __html: header.content || "<br />"
                  }}
                />
                <HeaderLink> {header.title} </HeaderLink>
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
`;

const HeaderContainer = styled.div`
  display: block;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 95vh;
`;
const HeaderText = styled.h3`
  margin: auto;
  color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderLink = styled.h2`
  margin: auto;
  color: white;
  position: relative;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
