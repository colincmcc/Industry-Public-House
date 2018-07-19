import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import EventSummaryComponent from "./EventSummaryComponent";
import theme from "../../common/styled/theme";

const EventListComponent = props => {
  const { eventList, pageTitle, classes } = props;
  return (
    <EventWrapper>
      <EventLabelCard>
        <EventHeading>{pageTitle} </EventHeading>
        <Button
          component={Link}
          to="/Events"
          classes={{ root: classes.buttonRoot }}
        >
          {" "}
          See More{" "}
        </Button>
      </EventLabelCard>
      <EventListWrapper>
        {eventList.map(event => (
          <EventSummaryComponent key={shortid.generate()} event={event} />
        ))}
      </EventListWrapper>
    </EventWrapper>
  );
};

export default withStyles(theme.materialUI)(EventListComponent);
const EventWrapper = styled.section`
  display: flex;
  box-shadow: inset 0 0 29px 0px ${props => props.theme.colors.blackTheme};
  max-width: 1600px;
  margin: auto;
`;

const EventLabelCard = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  height: 430px;
  z-index: -1;
  flex-direction: column;
  margin: auto;
  padding: 2em;
`;
const EventHeading = styled.div`
  ${props => props.theme.components.heading};
  padding-bottom: 0;
  margin: 0;
`;
const SubHeading = styled.div`
  ${props => props.theme.components.heading};
  padding: 2em;
  text-transform: uppercase;
  z-index: 1;
`;

const EventListWrapper = styled.div`
  padding: 2em;
  padding-left: 250px;
  margin: auto;
  white-space: nowrap;
  overflow-x: auto;
  transform: translateZ(10);
  min-height: 200px;
  min-width: 100%;
`;
