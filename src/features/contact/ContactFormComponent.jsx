import React, { Component } from "react";
import styled from "styled-components";

import SelectComponent from "../common/selectDropDown/SelectComponent";
import { validateOnBlur, setRowFocus } from "../../common/utils/utils";
import FormTextField from "../common/forms/FormTextField";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// TODO: Move logic and state into a container function

class ContactFormComponent extends Component {
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
    formIsValid: true,
    modalOpen: false
  };

  onFormFocusIn = ev => {
    setRowFocus();
  };

  onFormFocusOut = ev => {
    validateOnBlur(ev);
    setRowFocus();
  };

  render() {
    const {
      reason,
      modalOpen,
      handleOpen,
      handleClose,
      handleChange,
      handleSubmit
    } = this.props;

    const contactReasons = [
      {
        label: "Why are you reaching out?",
        disabled: true,
        value: "",
        selected: true
      },
      {
        label: "I have reservation for over 15 people",
        disabled: false,
        value: "reservation",
        selected: false
      },
      {
        label: "I'm representing a charity",
        disabled: false,
        value: "charity",
        selected: false
      },
      {
        label: "I'd like to hold an event at an Industry",
        disabled: false,
        value: "event",
        selected: false
      },
      {
        label: "I'd like to make food selections for my party",
        disabled: false,
        value: "food",
        selected: false
      },
      {
        label: "I have another reason...",
        disabled: false,
        value: "other",
        selected: false
      }
    ];

    return (
      <Form onsSubmit={handleSubmit} method="post" noValidate>
        <FormRow className="select form-item">
          <Label htmlFor="reason">Contact Reason</Label>
          <SelectWrapper>
            <SelectComponent
              handleChange={handleChange("reason")}
              options={contactReasons}
              currentReason={reason.value}
              name="reason"
              type="text"
              onOpen={handleOpen}
              onClose={handleClose}
              modalOpen={modalOpen}
            />
          </SelectWrapper>
        </FormRow>

        <FormSection className={reason.value !== "" ? "show-section" : ""}>
          <FormTextField
            type="text"
            id="firstname"
            placeHolder="Nikola"
            isRequired={true}
            handleChange={handleChange("firstname")}
            label="Your First Name"
          />

          <FormTextField
            type="text"
            id="lastname"
            placeHolder="Tesla"
            isRequired={true}
            handleChange={handleChange("lastname")}
            label="Your Last Name"
          />

          <FormTextField
            type="email"
            id="email"
            placeHolder="nikola.tesla@example.com"
            isRequired={true}
            handleChange={handleChange("email")}
            label="Your Email"
          />
        </FormSection>
      </Form>
    );
  }
}

export default ContactFormComponent;

const Form = styled.form`
  padding: 10px 10px 13px 15px;
  width: 100%;
  ${props => props.theme.media.tablet_portrait_up`
          padding:10px 18px 20px 24px;
  `};
`;
const FormRow = styled.div`
  padding: 8px 13px 2px 17px;
  transition: opacity 0.2s ease-in, height 0.2s ease-out;

  ${props => props.theme.media.tablet_portrait_up`
    display: flex;
    border-bottom: none;
    padding: 4px 0;
    max-width: 600px;
  `};
  &.has-focus {
    box-shadow: none;
    background-color: transparent;

    ${props => props.theme.media.tablet_portrait_up`
      box-shadow: 0 0 0 1px ${props => props.theme.colors.whiteTheme};
    `};
    > label {
      color: ${props => props.theme.colors.darkTheme};
    }
    > select {
      box-shadow: none;
      background-color: transparent;
      ${props => props.theme.media.tablet_portrait_up`
      box-shadow: 0 0 0 1px ${props => props.theme.colors.whiteTheme};
    `};
    }
  }
`;
const SelectWrapper = styled.div`
  flex: 68%;
  position: relative;
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  transition: color 0.1s ease-out;

  ${props => props.theme.components.small};
  color: ${props => props.theme.colors.blackTheme};
  font-weight: 600;
  letter-spacing: 0.43px;
  ${props => props.theme.media.tablet_portrait_up`
    ${props => props.theme.components.text};
    color: ${props => props.theme.colors.blackTheme};
    font-weight: 500;
    flex: 32%;
    text-transform: none;
    align-self: center;
    margin-right: 20px;
    text-align: left;
  `};
  &.with-summary {
    align-self: flex-start;
    padding-top: 7px;
  }
`;

const FormSection = styled.div`
  display: none;
  &.show-section {
    display: block;
  }
`;
