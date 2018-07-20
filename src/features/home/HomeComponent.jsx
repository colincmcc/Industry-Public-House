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
  // * Return an external link button if the Wordpress link is a custom button, else return an react-router link button. Probably should make a component

  const choosenHeader = chooseHeader();

  let isCustomLink = choosenHeader.acf.headerLink === "custom";
  const actionButton = isCustomLink ? (
    <Button
      variant="contained"
      classes={{ root: classes.homeButton }}
      href={choosenHeader.acf.customLink}
    >
      {choosenHeader.acf.buttonText}
    </Button>
  ) : (
    <Button
      variant="contained"
      classes={{ root: classes.homeButton }}
      component={Link}
      to={choosenHeader.acf.headerLink}
    >
      {choosenHeader.acf.buttonText}
    </Button>
  );

  const subHeading = (
    <HomeSubHeading>
      <Description>{choosenHeader.acf.subHeading}</Description>
    </HomeSubHeading>
  );

  const header = {
    bgImg: choosenHeader.acf.background_image,
    heroImg: choosenHeader.acf.hero_image,
    heading: choosenHeader.title.rendered,
    subHeading: subHeading,
    actionButton: actionButton
  };

  return (
    <HomeWrapper id="homePage">
      <PageHeaderContainer {...header} />
      <HomePageOverlay id="main">
        <AboutContainer />
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
