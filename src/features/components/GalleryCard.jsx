import React from 'react';
import styled, { keyframes } from 'styled-components';
import shortid from 'shortid';

import GrungeBorder from '../../common/assets/img/grunge_border_white.svg';

const GalleryCard = (props) => {
  const { event } = props;

  return (
    <CardWrapper>
      <CardImage eventImage={event.eventBackground} />
      <CardContent >
        <Border />
        <CardHeading>{event.title}</CardHeading>
        <EventTime>
          {`${event.eventStartDay} at ${event.eventStartTime}`}
        </EventTime>
        <EventDescription>
          {' '}
          {event.eventDescription}
          {' '}
        </EventDescription>
        <LocationGrid>
          {event.locations.map(location => (
            <SingleLocation key={shortid.generate()}>
              <strong>{location.title.rendered}</strong>
            </SingleLocation>
          ))}
        </LocationGrid>
      </CardContent>
    </CardWrapper>
  );
};

export default GalleryCard;

const cardEntrance = keyframes`

    from {
        opacity: 0;
        transform: translate3d(0,100%,0)
    }

    to {
        opacity: 1;
        transform: none
    }

`;
const CardWrapper = styled.div`
  display: block;
  position: relative;
  box-shadow: 0 15px 35px ${props => props.theme.colors.whiteTheme +
'08'};
  , 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin: 1rem;
  background-color: ${props => props.theme.colors.whiteTheme};
  ;
  animation: ${cardEntrance};
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-timing-function: 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  ${props => props.theme.media.tablet_portrait_up`
    justify-content: flex-start;
    display: flex;
  `};
`;
const CardImage = styled.div`
  width: 100%;
  min-height: 370px;
  background-size: cover;
  background-position: 50% 50%;
  background-color: ${props => props.theme.colors.whiteTheme + "08"};
  background: url(${props => props.eventImage});
  ${props => props.theme.media.tablet_portrait_up`
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    min-height: auto;
    width: 56%;
    padding-right: 50px;
  `};
`;
const Border = styled(GrungeBorder)`
  position: absolute;
  fill: ${props => props.theme.colors.whiteTheme};

    display: block;
    height: 50px;
    top: -47px;
    left: 0;
    ${props => props.theme.media.tablet_portrait_up`
      transform: rotate(90deg);
      top: 0;
      left: -75px;
      width: 275%;
      height: 100%;

    `};
`
const CardContent = styled.div`
  ${props => props.theme.fontStyles.text};
  position: relative;
  padding: 46px 40px;
  text-align: left;

  &:before {
    content: "";

  }
  ${props => props.theme.media.tablet_portrait_up`
   flex-basis: 50%;
   width: 44%;
   flex: 0 0 auto;
   padding: 66px;
  `};
`;
const CardHeading = styled.div`
  font-size: 22px;
  line-height: 33px;
  font-weight: 600;
  letter-spacing: 0.025em;
  font-family: "Gin-Rough";
`;
const EventTime = styled.div`
  text-align: left;
`;
const EventDescription = styled.p`
  word-break: break-word;
  white-space: normal;
`;
const SingleLocation = styled.div`
  text-align: left;
`;
const LocationGrid = styled.div`
  display: grid;
  grid: repeat(2, 1fr) / auto-flow;
`;
