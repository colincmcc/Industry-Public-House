import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';

const SimpleHeaderComponent = (props) => {
  const {
    heading, subHeading, bgImg, heroImg, actionButton,
  } = props;
  console.log(heroImg);
  return (
    <PageHeaderWrapper key={shortid.generate()}>
      <CSSTransition in classNames="fade" appear timeout={300}>
        <BGOverlay className="fade-appear" bgImg={bgImg} />
      </CSSTransition>
      <PageHeadContent>
        {heroImg && heroImg !== 'false' ? (
          <HeadingHero id="headingHero" src={heroImg} />
        ) : null}

        <HeadingText>
          <PageHeading>
            {heading}
          </PageHeading>

          <PageSubHeading>{subHeading}</PageSubHeading>
        </HeadingText>
      </PageHeadContent>
      <ActionButton>{actionButton}</ActionButton>
    </PageHeaderWrapper>
  );
};

export default SimpleHeaderComponent;

const PageHeaderWrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
const BGOverlay = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  transition: all 2s;
  box-shadow: inset 0 0 29px 0px ${props => props.theme.colors.blackTheme};

  &:after {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(17, 12, 2, 0.4);
  }
  &.fade-appear {
    opacity: 0;
    transform: scale(0.94);
  }
  &.fade-appear-done {
    opacity: 1;
    transform: scale(1);
  }
`;
const PageHeadContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  transform: translatez(0);
`;

const HeadingText = styled.div``;
const HeadingHero = styled.img`
  display: none;
  ${props => props.theme.media.tablet_portrait_up`
display: block;
width: 100%;
`};
`;
const PageHeading = styled.div`
  ${props => props.theme.components.heading};
  color: ${props => props.theme.colors.whiteTheme};
  text-transform: uppercase;
  padding: 0 2em;
`;
const PageSubHeading = styled.div`
  ${props => props.theme.components.subheading};
  color: ${props => props.theme.colors.whiteTheme};
  max-width: 500px;
  margin: auto;
`;

const ActionButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
  padding-bottom: 100px;
`;
