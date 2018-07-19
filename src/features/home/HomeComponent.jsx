import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AboutContainer from "./about/AboutContainer";
import PageHeaderContainer from "../common/page/PageHeaderContainer";
import EventContainer from "../events/EventContainer";

import theme from "../../common/styled/theme";
import homeBg from "../../common/assets/img/concrete-faded.jpg";

const HomeComponent = props => {
  const { allHeaders, classes } = props;

  function chooseHeader() {
    if (allHeaders.some(h => h.acf.isFeatured === true)) {
      return allHeaders.find(h => h.acf.isFeatured === true);
    }
    const randomHeader =
      allHeaders.length > 1
        ? allHeaders[Math.floor(Math.random() * allHeaders.length)]
        : allHeaders;

    return randomHeader;
  }

  const choosenHeader = chooseHeader();

  let isCustomLink = choosenHeader.acf.headerLink === "custom";

  const subHeading = (
    <HomeSubHeading>
      <Description>{choosenHeader.acf.subHeading}</Description>

      {isCustomLink ? (
        <Button
          classes={{ root: classes.buttonRoot }}
          href={choosenHeader.acf.customLink}
        >
          {choosenHeader.acf.buttonText}
        </Button>
      ) : (
        <Button
          classes={{ root: classes.buttonRoot }}
          component={Link}
          to={choosenHeader.acf.headerLink}
        >
          {choosenHeader.acf.buttonText}
        </Button>
      )}
    </HomeSubHeading>
  );

  const header = {
    bgImg: choosenHeader.acf.background_image,
    heading: choosenHeader.title.rendered,
    subHeading: subHeading
  };

  return (
    <HomeWrapper id="homePage">
      <PageHeaderContainer {...header} />
      <HomePageOverlay id="main">
        <AboutContainer />
        <EventContainer />
      </HomePageOverlay>
    </HomeWrapper>
  );
};

export default withStyles(theme.materialUI)(HomeComponent);

const HomeWrapper = styled.div``;
const HomePageOverlay = styled.div`
  position: relative;
  background-image: url(${homeBg});
  background-position: center;
  background-size: cover;
`;
const HomeSubHeading = styled.div``;
const Description = styled.p`
  font-style: italic;
`;
