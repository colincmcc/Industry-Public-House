import React, { Component } from "react";
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
import { CSSTransition } from "react-transition-group";

import fullLogo from "../../../../common/assets/img/Industry_fullLogo_sm_wht.svg";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  toggleEnterState = () => {
    this.setState({ mounted: true });
  };

  render() {
    const { mounted } = this.state;

    return (
      // TODO: add translucent black overlay on images to make text pop
      // TODO: better method to track orientation and naturalSlideHeight
      <CarouselWrapper id="Carousel">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={window.orientation == 0 ? 175 : 125}
          totalSlides={this.props.headers.length}
        >
          <Slider>
            {this.props.headers.map((header, index) => (
              <Slide key={shortid.generate()} index={index}>
                <CarouselContain
                  className="headerContainer"
                  key={shortid.generate()}
                >
                  <CSSTransition
                    in={true}
                    classNames="fade"
                    appear={true}
                    timeout={1000}
                  >
                    <CarouselBG
                      key={shortid.generate()}
                      bgImg={header.background}
                    />
                  </CSSTransition>
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
  }
}

export default CarouselComponent;

const CarouselWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.colors.whiteTheme};
`;

const CarouselContain = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const CarouselBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 2s;

  &.fade-appear {
    opacity: 0;
    transform: scale(0.94);
  }
  &.fade-appear-done {
    opacity: 1;
    transform: scale(1);
  }
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
