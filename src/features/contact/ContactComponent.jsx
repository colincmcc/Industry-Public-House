import React, { Component } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ContactDetailComponent from "./ContactDetailComponent";
import ContactFormComponent from "./ContactFormComponent";
import {
  validateField,
  validateForm,
  validateOnBlur,
  setRowFocus
} from "../../common/utils/utils";
import theme from "../../common/styled/theme";

class ContactComponent extends Component {
  state = {
    firstname: {
      value: "",
      type: "text"
    },
    lastname: {
      value: "",
      type: "text"
    },
    email: {
      value: "",
      type: "email"
    },
    reason: {
      value: "",
      type: "text"
    },
    formIsValid: false,
    modalOpen: false
  };

  componentDidMount() {
    this.addFormListeners();
  }

  handleChange = name => ev => {
    validateOnBlur(ev);
    console.log(`${ev.target.name} : ${ev.target.value} : ${ev.target.type}`);
    this.setState({
      [ev.target.name]: {
        value: ev.target.value
      }
    });
    console.log(this.state);
  };

  handleSubmit = ev => {
    ev.preventDefault();
    validateForm();
  };

  addFormListeners = () => {
    var form = document.querySelector("form");
    form.addEventListener("focusin", this.onFormFocusIn);
    form.addEventListener("focusout", this.onFormFocusOut);
  };

  handleOpen = ev => {
    this.setState({
      modalOpen: true
    });
  };

  handleClose = ev => {
    var formIsValid = validateForm();
    this.setState({
      modalOpen: false,
      formIsValid: formIsValid
    });

    validateOnBlur(ev);
  };

  render() {
    const { reason, formIsValid } = this.state;
    const { classes } = this.props;

    return (
      <ContactWrapper>
        <FormContainer>
          <ContactFormComponent
            handleChange={this.handleChange}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />

          <SubmitRow>
            <Button
              disabled={!formIsValid}
              onClick={this.handleSubmit}
              variant="contained"
              classes={{ contained: classes.homeButton }}
            >
              Next
            </Button>
          </SubmitRow>
        </FormContainer>
      </ContactWrapper>
    );
  }
}

export default withStyles(theme.materialUI)(ContactComponent);

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
const SubmitRow = styled.div`
  padding: 12px 10px 13px 0
    ${props => props.theme.media.tablet_portrait_up`
    padding: 12px 0 0;
    `};
`;
