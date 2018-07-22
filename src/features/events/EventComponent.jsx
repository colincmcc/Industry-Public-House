import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import theme from "../../common/styled/theme";
import GalleryCard from "../common/GalleryCard";
import Heading from "../common/Heading";

const EventComponent = props => {
  const { eventList, bgImg, heroImg, classes, pageTitle } = props;
  const hasBg = bgImg !== "false";
  const hasHero = heroImg !== "false";
  const eventBg = hasBg ? bgImg : null;
  const eventHero = hasHero ? heroImg : null;
  const reducedList =
    window.innerWidth < 599 ? eventList.slice(0, 2) : eventList;

  return (
    <EventWrapper id="events">
      <Heading center text={pageTitle} />
      <EventListWrapper>
        {reducedList.map(event => (
          <GalleryCard key={shortid.generate()} event={event} />
        ))}
      </EventListWrapper>
    </EventWrapper>
  );
};

export default withStyles(theme.materialUI)(EventComponent);

const EventWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 50vh;
  padding-top: 110px;

  background-color: ${props => props.theme.colors.blackTheme};
  background: url(${props => props.bgImg});
  background-size: ${props => (props.hasBg ? "cover" : null)};
  background-repeat: ${props => (props.hasBg ? "no-repeat" : "repeat")};
  max-width: 1040px;
  margin: auto;
`;

const EventListWrapper = styled.div`
  padding: 2rem;
`;

const EventHeader = styled.div``;
