import React, { Component } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Loadable from "react-loadable";
import PageHeaderContainer from "../common/page/PageHeaderContainer";
import EventContainer from "../events/EventContainer";
import theme from "../../common/styled/theme";
import mainBg from "../../common/assets/img/zig-zag.png";
import LoadingComponent from "../common/loading/LoadingComponent";

const LoadableAbout = Loadable({
  loader: () => import("./about/AboutContainer"),
  loading: LoadingComponent
});

class HomeComponent extends Component {
  componentDidMount() {
    LoadableAbout.preload();
  }

  render() {
    const { error, loading, allHeaders, classes } = this.props;
    if (error) return <LoadingComponent />;
    if (loading) return <LoadingComponent large />;

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

    const headerData = {
      bgImg: choosenHeader.acf.background_image,
      heroImg: choosenHeader.acf.hero_image,
      heading: choosenHeader.title.rendered,
      subHeading: subHeading,
      actionButton: actionButton
    };

    return (
      <HomeWrapper id="homePage">
        <PageHeaderContainer {...headerData} />
        <HomePageOverlay id="main">
          <MainBg />
          <LoadableAbout />
          <EventContainer />
        </HomePageOverlay>
      </HomeWrapper>
    );
  }
}

export default withStyles(theme.materialUI)(HomeComponent);

const HomeWrapper = styled.section``;
const HomePageOverlay = styled.div`
  position: relative;

  background-color: ${props => props.theme.colors.whiteTheme};
  box-shadow: 0 0 29px 0px ${props => props.theme.colors.blackTheme};
  max-width: 1160px;
  margin: auto;
`;
const HomeSubHeading = styled.div``;
const Description = styled.p`
  font-style: italic;
`;

const MainBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.blackTheme};
  background: url(${mainBg});
  background-repeat: repeat;
  max-width: 1160px;
  overflow: hidden;
`;
