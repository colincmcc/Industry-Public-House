import React, { Component } from "react";
import styled from "styled-components";

import SelectComponent from "../common/forms/SelectComponent";
import { validateOnBlur, setRowFocus } from "../../common/utils/utils";
import FormTextField from "../common/forms/FormTextField";

import { FormRow, FormLabel } from "../common/components";

// TODO: Move logic and state into a container function

class ContactFormComponent extends Component {
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
        <FormRow>
          <FormLabel htmlFor="reason">Contact Reason</FormLabel>
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
const SelectWrapper = styled.div`
  flex: 68%;
  position: relative;
  cursor: pointer;
`;
