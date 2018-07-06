import React from "react";
import styled from "styled-components";

const FooterComponent = props => {
  return (
    <FooterWrapper>
      <FooterContent>
        <ContactInfo>
          <FooterHeader> Contact Us </FooterHeader>
          <p>
            Lawrenceville
            <br />4305 Butler St. Pittsburgh, PA 15201
            <br />412-683-1100
            <br />reservations@industrypgh.com
          </p>
          <p>
            <br />North Fayette
            <br />140 Andrew Drive, Pittsburgh, PA 15275
            <br />412-490-9080
            <br />reservationswest@industrypgh.com
          </p>
        </ContactInfo>
        <MiscInfo>
          <FooterHeader> Find Us </FooterHeader>

          <div />
        </MiscInfo>
      </FooterContent>
    </FooterWrapper>
  );
};

export default FooterComponent;

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
