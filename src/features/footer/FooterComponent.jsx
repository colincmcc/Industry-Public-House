import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Facebook, Twitter, Instagram } from "mdi-material-ui";
import TripAdvisor from "../../common/components/tripadvisor";

import theme from "../../common/styled/theme";

const FooterComponent = props => {
  const { data, error, loading, classes } = props;

  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error... </div>;

  return (
    <FooterWrapper>
      <FooterContent>
        <ContactInfo>
          <FooterHeader> Contact Us </FooterHeader>

          {data.allLocations.map(location => (
            <div key={shortid.generate()}>
              <p>
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
              </p>
              <SocialButtons>
                <IconButton classes={{ root: classes.buttonRoot }}>
                  <Facebook />
                </IconButton>

                <IconButton classes={{ root: classes.buttonRoot }}>
                  <Twitter />
                </IconButton>

                <IconButton classes={{ root: classes.buttonRoot }}>
                  <TripAdvisor />
                </IconButton>
              </SocialButtons>
            </div>
          ))}
        </ContactInfo>
        <MiscInfo>
          <FooterHeader> Find Us </FooterHeader>

          <div />
        </MiscInfo>
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
  ${props => props.theme.media.tablet_landscape_up`
  flex-direction: row;
  `};
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  float: left;
  ${props => props.theme.components.small};
`;

const FooterHeader = styled.div`
  ${props => props.theme.components.smallHeading};
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
