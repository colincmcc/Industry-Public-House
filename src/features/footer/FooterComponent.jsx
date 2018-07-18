import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Facebook, Twitter, Instagram } from "mdi-material-ui";

import TripAdvisor from "../common/svgIcons/tripadvisor";
import theme from "../../common/styled/theme";

const FooterComponent = props => {
  const { data, error, loading, classes } = props;

  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error... </div>;

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterHeader> Contact Us </FooterHeader>

        <ContactInfo>
          {data.allLocations.map(location => (
            <LocationListing key={shortid.generate()}>
              <LocationContent>
                {location.title.rendered}
                <br />
                {location.acf.address.address.slice(0, -5)}
                <br />
                {location.acf.phone_number}
                <br />
                <Button
                  classes={{ root: classes.buttonRoot }}
                  href={`mailto:${location.acf.email}`}
                >
                  EMAIL
                </Button>
              </LocationContent>
              <SocialButtons>
                <IconButton
                  href={location.acf.facebook}
                  classes={{ root: classes.buttonRoot }}
                >
                  <Facebook />
                </IconButton>

                <IconButton
                  href={location.acf.twitter}
                  classes={{ root: classes.buttonRoot }}
                >
                  <Twitter />
                </IconButton>

                <IconButton
                  href={location.acf.trip_advisor}
                  classes={{ root: classes.buttonRoot }}
                >
                  <TripAdvisor />
                </IconButton>
              </SocialButtons>
            </LocationListing>
          ))}
        </ContactInfo>
      </FooterContent>
    </FooterWrapper>
  );
};

export default withStyles(theme.materialUI)(FooterComponent);

const FooterWrapper = styled.section`
  box-shadow: inset 0 0 29px 0px #000;
  width: 100%;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.fontStyles.text};
  padding: 2em;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  width: 50%;
  float: left;
  ${props => props.theme.components.small};
  ${props => props.theme.media.tablet_landscape_up`
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  `};
`;

const FooterHeader = styled.div`
  ${props => props.theme.components.smallHeading};

  ${props => props.theme.media.tablet_landscape_up`
    ${props => props.theme.components.heading};
  `};
`;
const LocationListing = styled.div`
  border-bottom: 2px solid ${props => props.theme.colors.whiteTheme};
  max-width: 360px;
  margin: auto;
`;
const LocationContent = styled.p`
  ${props => props.theme.fontStyles.text};
  margin-bottom: 0;
`;
const MiscInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  float: right;
  ${props => props.theme.components.small};
`;

const SocialButtons = styled.div`
  flex-direction: row;
`;
