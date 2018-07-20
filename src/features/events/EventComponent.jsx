import React from "react";
import styled from "styled-components";
import grungeBorder from "../../../common/assets/img/grunge_border_v2.svg";

const EventComponent = props => {
  const { eventList, bgImg, heroImg } = props;
  const hasBg = bgImg !== "false";
  const hasHero = heroImg !== "false";
  const eventBg = hasBg ? bgImg : null;
  const eventHero = hasHero ? heroImg : null;

  return (
    <div>
      <div />
    </div>
  );
};

export default EventComponent;

const EventWrapper = styled.div`
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
  &:before {
    content: "";
    width: 100%;
    height: 125px;
    background-image: url(${grungeBorder});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -125px;
  }
`;
