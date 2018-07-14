import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
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
            <p key={shortid.generate()}>
              {location.title.rendered}
              <br />
              {location.acf.address.address.slice(0, -1)}
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
  flex-direction: row;
  ${props => props.theme.fontStyles.text};
  padding: 2em;
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
