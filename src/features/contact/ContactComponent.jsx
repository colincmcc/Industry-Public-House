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
  min-height: 100vh;
`;
const FormContainer = styled.section`
  border-radius: 4px;
  max-width: 645px;
  width: 100%;
  background: ${props => props.theme.colors.whiteTheme};
  margin: auto;
  box-shadow: 0 50px 100px ${props => props.theme.colors.darkTheme + "1A"},
    0 15px 35px ${props => props.theme.colors.darkTheme + "26"},
    0 5px 15px rgba(0, 0, 0, 0.1);

  ${props => props.theme.media.tablet_landscape_up`
    margin: 0
  `};
`;
