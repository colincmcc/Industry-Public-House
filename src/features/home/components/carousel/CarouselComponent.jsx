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
import fullLogo from "../../../../common/assets/img/Industry_fullLogo_sm_wht.svg";

const CarouselComponent = props => {
  return (
    // TODO: add translucent black overlay on images to make text pop
    // TODO: better method to track orientation and naturalSlideHeight
    <CarouselWrapper id="Carousel">
      <LogoImg src={fullLogo} />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={window.orientation == 0 ? 175 : 125}
        totalSlides={props.headers.length}
      >
        <Slider>
          {props.headers.map((header, index) => (
            <Slide key={shortid.generate()} index={index}>
              <CarouselContain
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
              </CarouselContain>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </CarouselWrapper>
  );
};

export default CarouselComponent;

const CarouselWrapper = styled.section`
  height: 95vh;
  width: 100vw;
  color: ${props => props.theme.colors.whiteTheme};
`;
const LogoImg = styled.img`
  display: block;
  position: absolute;
  margin: 50px 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 80px;
  z-index: 5;
`;
const CarouselContain = styled.div`
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