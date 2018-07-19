import React from "react";
import styled from "styled-components";
import shortid from "shortid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

import theme from "../../common/styled/theme";

const EventSummaryComponent = props => {
  const { event, classes } = props;
  console.log(event);
  return (
    <Card key={shortid.generate()} className={classes.eventCard}>
      <CardMedia
        className={classes.eventMedia}
        image={event.eventBackground}
        title={event.title}
      />
      <CardContent>
        <LocationGrid>
          {event.locations.map(location => (
            <SingleLocation key={shortid.generate()}>
              <strong>{location.title.rendered}</strong>
            </SingleLocation>
          ))}
        </LocationGrid>
        <EventTime>
          <strong>Day: </strong> {event.eventStartDay}
          <br />
          <strong>Time: </strong> {event.eventStartTime}
        </EventTime>
        <EventDescription> {event.eventDescription} </EventDescription>
      </CardContent>
      <CardActions style={{ position: "absolute", bottom: 0 }}>
        <Button size="small" classes={{ root: classes.buttonRoot }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(theme.materialUI)(EventSummaryComponent);

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
