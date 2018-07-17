import React from "react";
import styled from "styled-components";
import shortid from "shortid";

import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import EventSummaryComponent from "./EventSummaryComponent";
import theme from "../../common/styled/theme";

const EventListComponent = props => {
  const { eventList, classes } = props;
  return (
    <EventWrapper>
      <EventHeader> What's Happening </EventHeader>

      <EventListWrapper>
        {eventList.map(event => (
          <EventSummaryComponent key={shortid.generate()} event={event} />
        ))}
      </EventListWrapper>
    </EventWrapper>
  );
};

export default withStyles(theme.materialUI)(EventListComponent);
const EventWrapper = styled.section``;
const EventListWrapper = styled.div`
  padding: 16px;
  max-width: 960px;
  margin: auto;
  white-space: nowrap;
  overflow-x: auto;
  transform: translateZ(0);
  min-height: 200px;
  min-width: 100%;
`;
const EventHeader = styled.div`
  ${props => props.theme.fontStyles.heading};
  margin: auto;
  text-transform: uppercase;
  color: ${props => props.theme.colors.themes};
  padding: 2em 0;
`;
