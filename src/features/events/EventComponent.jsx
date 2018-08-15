import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import LoadableVisibility from "react-loadable-visibility/react-loadable";
import Heading from "../components/Heading";
import LoadingComponent from "../components/loading/LoadingComponent";

const LoadableGalleryCard = LoadableVisibility({
  loader: () => import("../components/GalleryCard"),
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  },
  loading: LoadingComponent
});
const EventComponent = props => {
  const { eventList, pageTitle } = props;

  const reducedList = eventList.slice(0, 2);

  return (
    <EventWrapper id="events">
      <Heading center text={pageTitle} />
      <EventListWrapper>
        {reducedList.map(event => (
          <LoadableGalleryCard key={shortid.generate()} event={event} />
        ))}
      </EventListWrapper>
    </EventWrapper>
  );
};

export default EventComponent;

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
