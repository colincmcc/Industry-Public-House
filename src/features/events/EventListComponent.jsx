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
    <EventListWrapper>
      {eventList.map(event => (
        <EventSummaryComponent key={shortid.generate()} event={event} />
      ))}
    </EventListWrapper>
  );
};

export default withStyles(theme.materialUI)(EventListComponent);

const EventListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  max-width: 960px;
  margin: auto;
`;
const EventHeader = styled.div`
  ${props => props.theme.fontStyles.heading};
  margin: auto;
`;
