import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import Heading from "../common/Heading";
import { withStyles } from "@material-ui/core/styles";

import EventSummaryComponent from "./EventSummaryComponent";
import theme from "../../common/styled/theme";

const EventListComponent = props => {
  const { eventList, pageTitle } = props;
  return (
    <EventWrapper>
      <Heading text={pageTitle} />

      <EventListWrapper>
        {eventList.map(event => (
          <EventSummaryComponent key={shortid.generate()} event={event} />
        ))}
      </EventListWrapper>
    </EventWrapper>
  );
};

export default EventListComponent;
const EventWrapper = styled.section``;
const EventListWrapper = styled.div`
  padding-bottom: 2em;
  max-width: 960px;
  margin: auto;
  white-space: nowrap;
  overflow-x: auto;
  transform: translateZ(0);
  min-height: 200px;
  min-width: 100%;
`;
