import React from "react";
import styled from "styled-components";
import ContactFormComponent from "./ContactFormComponent";
const ContactComponent = props => {
  return (
    <ContactWrapper>
      <FormContainer>
        <ContactFormComponent />
      </FormContainer>
    </ContactWrapper>
  );
};

export default ContactComponent;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1160px;
  padding: 20px;
  overflow: hidden;
  margin: auto;
`;
const FormContainer = styled.section`
  border-radius: 4px;
  max-width: 645px;
  background: ${props => props.theme.colors.whiteTheme};
  margin: auto;
  ${props => props.theme.media.tablet_landscape_up`
    margin: 0
  `};
`;
